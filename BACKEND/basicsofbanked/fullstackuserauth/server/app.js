const express = require("express");
const app = express();

app.use(express.static('../client/public'));
app.use(express.json());

const userRouter = express.Router();
const authRouter = express.Router();

// /api/user/:id
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

userRouter
    .route("/")
    .get(getUser)
    .post(createUser)
    .patch(updateUser)
    .delete(deletUser);
userRouter
    .route("/:id")
    .get(getUserById);
authRouter
    .post("/signup", signupUser)

// database 
let users123 = [];

function signupUser(req,res){
    //email,password,name
    let { email, password, name} = req.body;
    console.log("user", req.body);

    users123.push({
        email, name, password
    });

    res.status(200).json({
        messsage:"user cr̥eated",
        createdUser: req.body
    });
}

function createUser(req, res) {
    console.log("req.data", req.body);
    users123 = req.body;
    res.status(200).send("data recieved and user added ");
}
function getUser(req, res) {
    console.log("users")
    res.json(users123);
    // for sending key value pair
}
function updateUser(req, res) {
    let obj = req.body;
    for (let key in obj) {
        user[key] = obj[key];
    }
    res.status(200).json(users123);
}
function deletUser(req, res) {
    users123 = {}
    res.status(200).json(users123);
}
function getUserById(req, res) {
    console.log(req.params);
    res.status(200).send("Hello");
}

app.listen(8080, ()=>{
    console.log("Server Started");
});
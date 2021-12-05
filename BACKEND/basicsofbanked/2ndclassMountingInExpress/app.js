const express = require("express");
const app = express();
// to accept post request 
app.use(express.json());

let user={
};

function createUser(req, res) {
    console.log("req.data", req.body);
    user = req.body;
    res.status(200).send("data recieved and user added ");
}
function getUser(req, res) {
    console.log("users")
    res.json(user);
    // for sending key value pair
}
function updateUser(req, res){
    let obj = req.body;
    for (let key in obj){
        user[key] = obj[key];
    }
    res.status(200).json(user);
}
function deleteUser(req, res) {
    user = {}
    res.status(200).json(user);
}
function getUserById(req, res) {
    console.log(req.params);
    res.status(200).send("Hello");
}

// mounting in express 
const router = express.Router();
// /api/user/:id
app.use('/api/user', router);

router 
    .route("/")
    .get(getUser)
    .post(createUser)
    .patch(updateUser)
    .delete(deleteUser);

router
     .route("/:id")
     .get(getUserById);

app.listen(3000, function(){
    console.log("server started yoho");
});
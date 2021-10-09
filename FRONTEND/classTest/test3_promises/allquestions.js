//ans 9
// function q9(num1,num2){
//     if(num1%2 == 0 && num1%num2){
//         return num1/num2;
//     }
//     else{
//         console.log("incompatible types");
//     }
// }
// console.log(q9(10,20));



//ans 7 
// setTimeout(function () {
//     console.log(4);
//   });
//   setTimeout(function () {
//     console.log(5);
//   });
  
//   let p = new Promise(function (resolve, reject) {
//     resolve();
//   });
  
//   console.log(1);
  
//   p.then(function () {
//     console.log(2);
//   });
  
//   p.then(function () {
//     console.log(3);
//   });
  
//   setTimeout(function () {
//     console.log(6);
//   });






//ans 5 deep clones func
// function f()
// {
//     // deep cloning of objects using JSON parse and stringify
//     let a={id:1 ,name:"rahul",address:{flatno:2}};
// let b= JSON.parse(JSON.stringify(a));
// b.id=5;
// b.address.flatno=45;
// console.log(a);
// console.log(b);
// }


// f();
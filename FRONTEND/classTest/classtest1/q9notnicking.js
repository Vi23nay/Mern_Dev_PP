let str="not picking";
let arr=str.split(" ");
let a=[];
a.push(arr[0]);

let b=[];
b.push(arr[1]);

function swap(a,b)
{
    let temp=a[0];
    a[0]=b[0];
    b[0]=temp;

    console.log(a,b);
}
swap(a,b);

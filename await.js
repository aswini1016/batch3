function demo()
{
console.log("start");
console.log(10);
console.log(20);
console.log(30);
console.log(40);
console.log("end");
}
demo();
 
let p = new Promise((resolve , reject)=>{
    setTikmeout(()=>{
        resolve("success");

    }, 5000)
})

 async function demo(){
    console.log("start");
        let x = p;
        console.log("End");
};
demo()

async function fetchusers()
{
    let respponse =await fetch("https://jsonplaceholder.typicode.com/users");
    let data =await Response.json();
    console.log();
    
}
fetchusers();

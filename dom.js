// console.log(window);
// console.log(document);

// let element = document.getElementById("demo");
// element.innerText = "G+"
// console.log(element);

let ele = document.getElementById("test");
// ele.innerText= "<h1>Header</h1>"
ele.innerHTML = "<h1>Header</h1>"
console.log(ele);

let ele = document.getElementsByClassName("test");
console.log(ele);
console.log(Array.isArray(ele));
ele[0].innerText="Hello"
//ele[0].style.backgroundColor="tomato"
let x = [...ele];
console.log(x, Array.isArray(x));
x.map(element=>{
    console.log(element);
    element.style.backgroundColor="orange"
})
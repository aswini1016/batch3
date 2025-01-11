//function demo(a,b){
   // a+b;
    //};
    //let x = demo(5,5);
    //console.log(x);

//function hof(a){
    //return a;
//};
//let x = hof("Ashwini");
//console.log(x);

function x(){
    let a = 10;
    const b =20;
    console.log(a ,b);
    function y() {
        let p= "Js";
        var q = "Reactjs";
        console.log(p , q);
        function z(){
            const username = "ashwini";
            console.log(username);
            console.log(a);
            console.log(q);
        }
        z();

    }
    y();

}
x();
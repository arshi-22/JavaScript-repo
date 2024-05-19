console.log("Hello world");
console.log("3"==3);
console.log("3"===3);
let ar = [1,23,4];
let ar2 = [2,3,4];
console.log(ar.splice(1,1));
console.log(ar);
console.log(ar2.slice(1,3));
console.log(ar2);
const vehicles = ['mustang', 'f-150', 'expedition'];
console.log(vehicles.filter(item=>item== "f-150"));
const [car,, suv] = vehicles;
console.log(car);
function foo() {
    let a = b = 0;
    a++;
    return a;
  }
console.log(foo()); 
 console.log(typeof a) // => ???
 console.log(typeof b)// => ???

let a = 10;
let b =20;
[a,b] = [b,a];
console.log(a,b);
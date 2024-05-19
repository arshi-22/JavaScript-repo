let employee =  ["Ross","Geller","Male"];
let[firstname,lname,gender] = employee;
console.log(fname,lname,gender);

let [fname,...element] = employee;
console.log(fname,employee);
// out put will be like
// Ross [Geller,Male]

let {f_name: f, l_name: l,gender_: g} = employee;
console.log(f,l,g);
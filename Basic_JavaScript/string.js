let text = "Hello World";

console.log(text.length); //11;

console.log(text.at(3)); // l
console.log(text.at(-3)); // r
console.log(text.charAt(3)); // l
console.log(text.charCodeAt(3)); // 108

console.log(text[2]); // l

console.log(text.slice(1)); //ello World
console.log(text.slice(6, 10)); // Worl
console.log(text.slice(6, 11)); //World
console.log(text.slice(-5)); //World

console.log(text.substring(0, 5)); //hello (2nd position -> lenght)
console.log(text.substring(0));
console.log(text.substr(0, 6)); //hello (2nd position -> end)

console.log(text.concat("", "!")); //Hello World !
console.log(text.toLocaleLowerCase()); //hello world
console.log(text.toLowerCase()); //hello world
console.log(text.toUpperCase()); //HELLO WORLD

let str = "           Hello        ";
console.log(str.trim()); //Hello
console.log(str.trimStart());
console.log(str.trimEnd());

let num = "5";

console.log(str.padStart(4, "0"));

console.log(str.trim().repeat(2)); //HelloHello
console.log(str.trim().replace("l", 1)); //He1lo
console.log(str.trim().replaceAll("l", 1)); //He110

text = "Hello, World";
console.log(text.trimEnd().split(",")); //[ 'Hello', ' World' ]
console.log(str.trim().split("")); //[ 'H', 'e', 'l', 'l', 'o' ]

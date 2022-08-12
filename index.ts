import ClassA from "./src/models/ClassA";
import ClassB from "./src/models/ClassB";

let obj: unknown = new ClassA();

console.log(obj instanceof ClassA);
console.log(obj instanceof ClassB);
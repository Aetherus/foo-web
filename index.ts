import ClassA from "./src/models/ClassA";
import ClassB from "./src/models/ClassB";
import { extensionCodec } from "./src/MsgpackConf";
import fs from 'fs';
import { decode } from '@msgpack/msgpack';

let obj: unknown = new ClassA();

console.log(obj instanceof ClassA);
console.log(obj instanceof ClassB);

fs.readFile("./tmp/b.msgpack", (err, data) => {
  console.log(decode(data, {extensionCodec}))
});
import { encode, decode, ExtensionCodec } from "@msgpack/msgpack";
import ClassA from "./models/ClassA";
import ClassB from "./models/ClassB";
const extensionCodec = new ExtensionCodec();

// Set<T>
const EXT_TYPE = 1 // Any in 0-127
extensionCodec.register({
  type: EXT_TYPE,
  encode: (object: unknown): Uint8Array | null => {
    if (object instanceof ClassA) {
      return encode(["A", {...object}]);
    } else if (object instanceof ClassB) {
      return encode(["B", {...object}]);
    } else {
      return null;
    }
  },
  decode: (data: Uint8Array) => {
    const [typeHint, plainObj] = decode(data) as Array<any>;
    if (typeHint === "A") {
      plainObj.__proto__ = ClassA.prototype;
    } else if (typeHint === "B") {
      plainObj.__proto__ = ClassB.prototype;
    }
    return plainObj;
  },
});

export { extensionCodec };
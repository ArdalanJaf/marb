export default function flattenObj(obj, arr = []) {
  // flattens obj with nested objs (inc. within arrays) into array of bottom level objects.

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object" && JSON.stringify(obj[key]) !== "{}") {
      //   console.log("a", obj[key]);
      if (typeof obj[key][Object.keys(obj[key])[0]] === "object") {
        // console.log("b", obj[key][Object.keys(obj[key])[0]]);
        flattenObj(obj[key], arr);
      } else {
        // console.log("c", obj[key]);
        arr.push(obj[key]);
      }
    }
  });

  return arr;
}

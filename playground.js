let obj = {
  out: {
    in: [{ en: "value" }],
  },
};

let test = obj["out"]["in"][0]["thing"];

let lang = "en";

let arr = ["out", "in", 0, lang];

let test2 = (obj, arr) => {
  return obj[arr[0]][arr[1]][arr[2] && arr[2]][arr[3] && arr[3]];
};
// console.log(test2(obj, arr));

let value = "???";
const arrToObjLoc = (obj, arr, value) => {
  switch (arr.length) {
    case 1:
      return value ? (obj[arr[0]] = value) : obj[arr[0]];
    case 2:
      return value ? (obj[arr[0]][arr[1]] = value) : obj[arr[0]][arr[1]];
      break;
    case 3:
      return value
        ? (obj[arr[0]][arr[1]][arr[2]] = value)
        : obj[arr[0]][arr[1]][arr[2]];
      break;
    case 4:
      return value
        ? (obj[arr[0]][arr[1]][arr[2]][arr[3]] = value)
        : obj[arr[0]][arr[1]][arr[2]][arr[3]];
      break;
    default:
      return console.log("error: array must have at least 1 element");
  }
};

arrToObjLoc(obj, arr, "NEW");
let test3 = arrToObjLoc(obj, ["out"]);
console.log(test3);

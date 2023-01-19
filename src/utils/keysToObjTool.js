export const keysToObjTool = (obj, keys, value = null) => {
  // obj = target object
  // keys = arrays of strings/ints/variable representing object keys to drill into
  // value = optional value to change property of final key
  switch (keys.length) {
    case 1:
      return value ? (obj[keys[0]] = value) : obj[keys[0]];
    case 2:
      return value ? (obj[keys[0]][keys[1]] = value) : obj[keys[0]][keys[1]];
      break;
    case 3:
      return value
        ? (obj[keys[0]][keys[1]][keys[2]] = value)
        : obj[keys[0]][keys[1]][keys[2]];
      break;
    case 4:
      return value
        ? (obj[keys[0]][keys[1]][keys[2]][keys[3]] = value)
        : obj[keys[0]][keys[1]][keys[2]][keys[3]];
      break;
    default:
      return console.log("error: keysay must have at least 1 element");
  }
};

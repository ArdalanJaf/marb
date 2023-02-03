export const navObjWithKeys = (obj, keys, value = null) => {
  // obj = target object
  // keys = array of strings/ints/variable representing object keys to drill into
  // value = "value" argument to change value of final key (without value: return existing value)
  switch (keys.length) {
    case 1:
      return value ? (obj[keys[0]] = value) : obj[keys[0]];
    case 2:
      return value ? (obj[keys[0]][keys[1]] = value) : obj[keys[0]][keys[1]];
    case 3:
      return value
        ? (obj[keys[0]][keys[1]][keys[2]] = value)
        : obj[keys[0]][keys[1]][keys[2]];
    case 4:
      return value
        ? (obj[keys[0]][keys[1]][keys[2]][keys[3]] = value)
        : obj[keys[0]][keys[1]][keys[2]][keys[3]];
    default:
      return console.log("error: keys must be array with at least 1 element");
  }
};

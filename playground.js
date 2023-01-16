function tagStripper(str) {
  let htmlTagRegex = /<[^<>]+>/g;
  return str.replaceAll(/<[^<>]+>/g, "");
}

console.log(tagStripper("<td as=asd>askdhaksjdas</td>"));

export default function htmlTagStripper(str) {
  return str.replaceAll(/<[^<>]+>/g, "");
}

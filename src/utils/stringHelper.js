export function removeSpaces(string) {

  if(string === "") {
    return "";
  }
  else if(!string || typeof string != 'string') {
    return null;
  }

  return string.replace(/ /g, "");
}

function solution(string) {
  isupperchar = !/[a-z]/.test(string) || /[A-Z]/.test(string);
  if (isupperchar) {
    const newStr = string.replace(/([A-Z])/g, " $1").trim();
    return newStr;
  } else {
    return string;
  }
}

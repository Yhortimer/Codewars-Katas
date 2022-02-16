/* Complete the solution so that the function will break up camel casing, using a space between words. */

function solution(string) {
  isupperchar = !/[a-z]/.test(string) || /[A-Z]/.test(string);
  if (isupperchar) {
    const newStr = string.replace(/([A-Z])/g, " $1").trim();
    return newStr;
  } else {
    return string;
  }
}

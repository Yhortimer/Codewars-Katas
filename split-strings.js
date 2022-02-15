/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
 */

function solution(str) {
  const string = str.split();
  const arraytostring = string + "";
  const arraylen = arraytostring.length;
  if (arraylen % 2 !== 0) {
    result = str.split(/(..)/g).filter((i) => i);
    last = result.slice(-1);
    result.splice(-1);
    result.push(`${last}_`);
  } else {
    returnresult = str.split(/(..)/g).filter((i) => i);
  }
  console.log(result);
}

solution("abcdefg");

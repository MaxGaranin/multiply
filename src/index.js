module.exports = function multiply(first, second) {
  let n = +first;

  let ks = [];
  for (let i = second.length - 1; i >= 0; i--) {
    ks.push(+second[i]);
  }

  let result = 0;
  let i = 0;
  for (const k of ks) {
    let mult = n * (k * Math.pow(10, i));
    result += mult;
    i++;
  }

  return result;
}

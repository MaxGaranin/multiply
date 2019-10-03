module.exports = function multiply(first, second) {
  if (second.length > first.length) {
    [first, second] = [second, first];
  }

  let a = strToReverseArray(first);
  let b = strToReverseArray(second);
  
  let res = [];
  for (let i = 0; i < a.length + b.length; i++) {
    res[i] = 0;
  }

  let k = 0;

  for (let i = 0; i < b.length; i++) {
    k = i;
    let c_decimal = 0;

    for (let j = 0; j < a.length; j++) {
      let c = a[j] * b[i] + c_decimal;

      let c_reminder = c % 10;
      c_decimal = Math.trunc(c / 10);

      let acc_res = res[k] + c_reminder;
      res[k] = acc_res % 10;
      c_decimal += Math.trunc(acc_res / 10);

      k++;
    }

    if (c_decimal > 0) {
      res[k] += c_decimal;
      k++;
    }
  }

  let str_res = res.slice(0, k).reverse().join('');
  return str_res;
}

function strToReverseArray(s) {
  let arr = [];
  let i = s.length - 1;
  while (i >= 0) {
    arr.push(s[i]);
    i--;
  }
  return arr;
}
module.exports = function check(str, bracketsConfig) {
  var left = [];
  var right = [];
  var arr = [];

  bracketsConfig.forEach((c) => {
    left.push(c[0]);
    right.push(c[1]);
  });
  
  for (var i = 0; i < str.length; i++) {
    if (i == 0 && belong(str[i], left)) {
      arr.push(str[i]);
    } 

    if (belong(str[i], left) && i != 0 && str[i] != arr[arr.length-1]) {
      arr.push(str[i]);
    } else if (isClosed(arr[arr.length-1], str[i], left, right) && i != 0) {
      arr.pop();
    } else if (i != 0){
      arr.push(str[i]);
    }
  }

  return (arr.length > 0) ? false : true;
}

function belong (val, arr) {
  return (arr.indexOf(val) !== -1) ? true : false ;
};

function isClosed (l, r, arrL, arrR) {
  let iL = arrL.findIndex((el) => {
    if (el === l) return true;
  });
  let iR = arrR.findIndex((el, i) => {
    if (el === r) return true;
  });

  return (iR === iL) ? true : false;
}

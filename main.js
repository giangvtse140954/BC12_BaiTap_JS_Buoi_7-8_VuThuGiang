// common
function getEle(id) {
  return document.getElementById(id);
}
for (
  var k = 0;
  k < document.getElementsByClassName('btn-success').length;
  k++
) {
  document.getElementsByClassName('btn-success')[k].style.display = 'block';
}
var arr = document.getElementsByClassName('ele');

function validateNull() {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].value === '') {
      getEle('err1').innerHTML = 'Vui lòng nhập đầy đủ thông tin';
      return false;
    }
    if (arr[i].value != parseInt(arr[i].value)) {
      getEle('err1').innerHTML =
        'Vui lòng nhập số nguyên ở vị trí thứ ' + (i + 1);
      return false;
    }
  }
  return true;
}
function addOneMore() {
  var main = getEle('element1');
  var div = document.createElement('div');
  div.innerHTML = `<input type="number" class="form-control mt-2 ele" placeholder="Nhập giá trị phần tử">`;
  main.appendChild(div);
}

function refresh() {
  var main = getEle('element1');
  main.innerHTML = '';
}

// bai 1
function sumPositiveNums() {
  var sum = 0;
  if (!validateNull()) {
    return;
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].value >= 0) {
      sum += Number(arr[i].value);
    }
    getEle('err1').innerHTML = '';
    getEle('ket1').innerHTML = 'Kết quả: ' + sum;
  }
}

// bai 2
function countPositiveNums() {
  var count = 0;
  if (!validateNull()) {
    return;
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].value > 0) {
      count++;
    }
    getEle('err1').innerHTML = '';
    getEle('ket1').innerHTML = 'Kết quả: ' + count;
  }
}

// bai 3
function findMinimumNum() {
  if (!validateNull()) {
    return;
  }
  var minimum = arr[0].value;
  for (var i = 0; i < arr.length; i++) {
    if (Number(arr[i].value) < Number(minimum)) {
      minimum = arr[i].value;
    }
  }
  getEle('err1').innerHTML = '';
  getEle('ket1').innerHTML = 'Kết quả: ' + minimum;
}

// bai 4
function findPositiveMinimumNum() {
  if (!validateNull()) {
    return;
  }
  var minimum = arr[0].value;
  for (var i = 0; i < arr.length; i++) {
    if (minimum < 0) {
      minimum = arr[i].value;
    }
    if (Number(arr[i].value) < Number(minimum) && arr[i].value >= 0) {
      minimum = arr[i].value;
    }
  }
  if (minimum < 0) {
    minimum = 'Không tồn tại số dương trong mảng này';
  }
  getEle('err1').innerHTML = '';
  getEle('ket1').innerHTML = 'Kết quả: ' + minimum;
}

// bai 5
function findLastEvenNum() {
  if (!validateNull()) {
    return;
  }

  var even = arr[0].value;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].value % 2 === 0 && arr) {
      even = arr[i].value;
    }
  }
  if (even % 2 != 0) {
    even = '-1';
  }
  getEle('err1').innerHTML = '';
  getEle('ket1').innerHTML = 'Kết quả: ' + even;
}
// bai 6
getEle('swap').style.display = 'none';
function swap() {
  getEle('swap').style.display = 'block';
}
getEle('close').onclick = function () {
  getEle('swap').style.display = 'none';
};
function execute() {
  if (!validateNull()) {
    return;
  }
  var i1 = getEle('index1').value;
  var i2 = getEle('index2').value;
  if (i1 === '' || i2 === '') {
    getEle('err1').innerHTML = 'Vui lòng nhập đầy đủ thông tin';
    return;
  }

  if (!(i1 >= 0 && i2 < arr.length) || !(i2 >= 0 && i1 < arr.length)) {
    getEle('err1').innerHTML =
      'Vui lòng nhập vị trí lớn hơn hoặc bằng 0 và bé hơn ' + arr.length;
    return;
  }

  var tmp = arr[i1].value;
  arr[i1].value = arr[i2].value;
  arr[i2].value = tmp;

  getEle('err1').innerHTML = '';
  // getEle('ket1').innerHTML = 'Kết quả: ' + even;
}

// bai 7
function sortArr() {
  if (!validateNull()) {
    return;
  }
  var tmp = [];

  for (let i = 0; i < arr.length; i++) {
    tmp.push(arr[i].value);
  }
  for (let k = 0; k < tmp.length - 1; k++) {
    for (let j = 0; j < tmp.length - k - 1; j++) {
      if (tmp[j] > tmp[j + 1]) {
        var t = Number(tmp[j]);
        tmp[j] = Number(tmp[j + 1]);
        tmp[j + 1] = t;
      }
    }
  }

  getEle('err1').innerHTML = '';
  var str = '';
  for (let i = 0; i < tmp.length; i++) {
    str += tmp[i] + ' ';
  }
  getEle('ket1').innerHTML = 'Kết quả: ' + str;
}

// bai 8
function findFirst() {
  if (!validateNull()) {
    return;
  }
  var result = -1;
  for (let i = 0; i < arr.length; i++) {
    var isPrime = true;
    if (arr[i].value < 2) {
      isPrime = false;
    } else {
      for (let j = 2; j < arr[i].value; j++) {
        if (arr[i].value % j === 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      result = arr[i].value;
      break;
    }
  }

  getEle('err1').innerHTML = '';
  getEle('ket1').innerHTML = 'Kết quả: ' + result;
}

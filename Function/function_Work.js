var x = 1;
a();
b();

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 1000;
  console.log(x);
}

console.log(x);

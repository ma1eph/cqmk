var MLT = "Å~";
var DIV = "ÅÄ";
function a(n) {
  document.getElementById("cst").appendChild(document.createTextNode(n));
}
function b() {
  document.getElementById("cst").appendChild(document.createElement("br"));
}
function c() {
  var n = document.getElementById("cst");
  while (n.hasChildNodes()) {
    n.removeChild(n.lastChild());
  }
}
function d() {
  var map = [];
  for (var i = 0; i <= 7; i++) {
    map.push({
      index: i,
      value: Math.random()
    });
  }
  map.sort(function(a, b) {
    return a.value > b.value ? 1 : -1;
  });
  var r = new Array();
  for (var i = 0, length = map.length; i < length; i++) {
    r.push(map[i].index);
  }
  return r;
}
function e() {
  var x = [];
  var l = d();
  var r = [ 2, 6, 3, 7, 4, 8, 5, 9 ];
  for (var i = 0, length = r.length; i < length; i++) {
    var s = d();
    for (var j = 0, length = r.length; j < length; j++) {
      var y = [];
      var k = s[j];
      y.push(((l[k] + l[i]) % r.length) + 2);
      y.push(r[k]);
      x.push(y);
    }
  }
  return x;
}
function f() {
  c();
  var x = e();
  for (var i = 0, length = x.length; i < length; i++) {
    if (i % 8 == 0) b();
    b();
    a(x[i][0]);
    a(MLT);
    a(x[i][1]);
  }
}
function g() {
  c();
  var x = e();
  for (var i = 0, length = x.length; i < length; i++) {
    if (i % 8 == 0) b();
    b();
    a((x[i][0] * x[i][1]));
    a(DIV);
    a(x[i][1]);
  }
}

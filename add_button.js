btn1.innerHTML = "버튼1";

var readInput = function() {
    var input = document.getElementById('input1');
    console.log(input.value);
};

var btn2 = document.createElement('button');
btn2.innerHTML = "버튼2";
btn2.onclick = readInput;
var tset = document.getElementById('test')
tset.appendChild(document.createElement('br'));
tset.appendChild(btn2);

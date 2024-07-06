const Author = "Abdul Rehman Jiwani"
const Made = "Developed by Abdul Rehman Jiwani"

console.log("The Author of this Calculator is " + Author)
console.log("This Calculator is " + Made)

function display(v) {
    document.getElementById('result').value += v;
}

function Clearscreen() {
    document.getElementById('result').value = " ";
}

function resultdata() {
    res = document.getElementById('result').value;
    result = eval(res);
    document.getElementById('result').value = result;
}
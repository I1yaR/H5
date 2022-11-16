// for
//while

let div = document.querySelectorAll('.one');
console.log(div);
//div.style.background = 'red';

// for (let i = 0; i < div.length; i = i + 1) {
//     console.log(div[i]);
//     div[i].style.background = 'red';
//     div[i].onclick = two;
// }

// function two() {
//     console.log('work!!!');
// }

// let b = document.getElementsByClassName('one');
// let c = document.getElementsByTagName('div');
// console.log(b);
// console.log(c);

// for (let i = 0; i < b.length; i++) {
//     b[i].style.border = '3px solid black';
// } 

document.querySelector('button').onclick = () => {
    let r = document.querySelectorAll('input[type="radio"]');
    console.log(r);
    for (let i = 0; i < r.length; i++) {
        if (r[i].checked) {
            console.log(r[i].value);
        }
    }
}

let out = '';
for (let i = 0; i < 10; i++) {

    if (i == 6) continue;
    out += i + ' ';
    // if (i == 6) break;
}
document.querySelector('#out').innerHTML = out;

const button1 = document.querySelector(".button-1")
button1.onclick = function t1 () {
  for (let i = 0; i < 50; i++) {
   console.log(i)
  }
}

const button2 = document.querySelector(".button-2")
const out2 = document.querySelector(".out-2")
button2.onclick = function t2 () {
    for (let i = 0;i < 122; i= i + 2) {
     out2.value += i + " "
    }
}

const button3 = document.querySelector(".button-3")
const out3 = document.querySelector(".out-3")
button3.onclick = function t3 () {
    for (let i = 25;i > 0; i--) {
        out3.value += i + " "
    }
}

const button4 = document.querySelector(".button-4")
const out4 = document.querySelector(".out-4")
button4.onclick = function t4 () {
    for (let i = 77; i > 35;i--) {
        out4.value += i + "_"
    }
}

const button5 = document.querySelector(".button-5")
const out15 = document.querySelector(".out-5")
button5.onclick = function t5 () {
    for(let i = 1; i < 17;i++) {
        if (6 % 3 === 0) {
            out15.value += i + "_**"
        } else  {
            out15.value += i + "_*"
        }
    }

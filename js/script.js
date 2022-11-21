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
const out5 = document.querySelector(".out-5")
button5.onclick = function t5 () {
    for (let i = 1; i < 17; i++) {
        if (6 % 3 === 0) {
            out5.value += i + "_**"
        } else {
            out5.value += i + "_*"
        }
    }
}

const button7 = document.querySelector(".button-7")
const i7 = document.querySelector(".i-7")
const out7 = document.querySelector(".out-7")
    button7.onclick = function t7() {
    for (let i = i7.value; i >= 0; i--) {
        out7.innerHTML += i + " "
    }
    }

const i81 = document.querySelector(".i-81")
const i82 = document.querySelector(".i-82")
const button8 = document.querySelector(".button-8")
const out8 = document.querySelector(".out-8")
button8.onclick = function t8 () {
    for (let i = i81.value; i <= i82.value; i++ ) {
    out8.innerHTML += i + " "
  }
}

const i91 = document.querySelector(".i-91")
const i92 = document.querySelector(".i-92")
const button9 = document.querySelector(".button-9")
const out9 = document.querySelector(".out-9")
 button9.onclick = function t9 () {
    if (i91.value < i92.value) {
        for ( let i = i91.value ; i <= i92.value; i++){
        out9.innerHTML += i + " "
        }
    }
    else if (i92.value < i91.value) {
        for ( let i = i92.value ; i <= i91.value; i++){
        out9.innerHTML += i + " "
        }
    }
 }

const button10 = document.querySelector(".button-10")
const out10 = document.querySelector(".out-10")
 button10.onclick = function t10 () {
  for ( let i =  1950; i <= 2000; i = i + 2 ) {
     out10.innerHTML += i + " "
  }
 }

const div11 = document.querySelector(".div-11")
const button11 = document.querySelector(".button11")
const out11 = document.querySelector(".out-11")
 button11.onclick = function t11 () {
    for ( let i = 0; i < div11; i++) {
        out11.innerHTML  = i + " "
    }
 }
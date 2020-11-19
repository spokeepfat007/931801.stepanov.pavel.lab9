const input1 = document.getElementById("input");
input1.value[input1.value.length - 1].color = 'black';
let zero = document.getElementById("zero");
let k = 0;

function add(e) {
    if (input1.value.length >= 2) {
        if (input1.value[input1.value.length - 2].match(/[/*+-]/) && e === '.') return;
    }
    if (input1.value.length === 1 && input1.value === '0' && e.match(/[0-9]/)) {
        input1.value = e;
        zero.innerText = e;
    } else if (input1.value.length === 1 && input1.value === '0' && e.match(/[.]/)) {
        if (e === '.' && k !== 1) k = 1; else if (e === '.') return;
        input1.value += e;
        zero.innerText += e;
    } else if (e.match(/[0-9.]/)) {
        if (e === '.' && k !== 1) k = 1; else if (e === '.') return;
        input1.value += e;
        if (input1.value[input1.value.length - 2].match(/[0-9.]/)) {
            zero.innerText += e;
        } else {
            zero.innerText = e
        }
    } else {
        if (input1.value.length >= 2) {
            if (input1.value[input1.value.length - 2].match(/[/*+-]/) || input1.value[input1.value.length - 1] === '.') return;
        }
        input1.value += ' ' + e + ' ';
        zero.innerText = " " + e + " ";
        k = 0;
    }

}

function cl() {
    input1.value = "0";
    zero.innerText = "0";
    k = 0;
}

function del() {
    if (input1.value.length === 1) {
        input1.value = '0';
        zero.innerText = "0";
    } else if (input1.value[input1.value.length - 1].match(/[0-9.]/)) {
        input1.value = input1.value.substring(0, input1.value.length - 1);
        let i = 1;
        k = 0;
        if (input1.value[input1.value.length - i] === '.') k = 1;
        while (input1.value[input1.value.length - i] !== " " && (i) <= input1.value.length) {
            i++;
            if (input1.value[input1.value.length - i] === '.') k = 1;
        }
        zero.innerText = input1.value.substring(input1.value.length - i + 1, input1.value.length);
    } else {
        input1.value = input1.value.substring(0, input1.value.length - 3)
        i = 1;
        k = 0;
        if (input1.value[input1.value.length - i] === '.') k = 1;
        while (input1.value[input1.value.length - i] !== " " && (i) <= input1.value.length) {
            i++;
            if (input1.value[input1.value.length - i] === '.') k = 1;
        }
        zero.innerText = input1.value.substring(input1.value.length - i + 1, input1.value.length);
    }
}

function equal() {
    input1.value = eval(input1.value);
    zero.innerText = eval(input1.value);
}

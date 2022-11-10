//tri tran 21:04    09 11 2022
var question = prompt("Rock, Paper or Scissor?").toLowerCase();
var robotchoose = Math.floor(Math.random() * 3);
function a0() {
    let a = 0;
    return a;
}
function a1() {
    let a = 1;
    return a;
}

function a2() {
    let a = 2;
    return a;
}

function rocks() {
    return "rock";
}

function paper() {
    return "paper";
}

function scissor() {
    return "scissor";
}
let choice = [scissor(), paper(), rocks()];

function logic(a, b) {
    if (a == rocks()) {
        switch (b) {
            case 0:
                return [a0(), b];
            case 1:
                return [a1(), b];
            case 2:
                return [a2(), b];
        }
    } else if (a == paper()) {
        switch (b) {
            case 0:
                return [a1(), b];
            case 1:
                return [a2(), b];
            case 2:
                return [a0(), b];
        }
    } else {
        switch (b) {
            case 0:
                return [a2(), b];
            case 1:
                return [a0(), b];
            case 2:
                return [a1(), b];
        }
    }
}
function win(a) {
    console.log("The computer choosed"+choice[a[1]]);
    switch (a[0]) {
        case 0: {
            return console.log("You won");
        }
        case 1: {
            return console.log("You lost");
        }
        case 2: {
            return console.log("It's a draw");
        }
    }
}

console.log(win(logic(question, robotchoose)));
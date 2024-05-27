const game = document.getElementById('game');
const modal = document.querySelector('.modal');
const winner = document.querySelector('.modal p span');
let current = 0;

document.addEventListener('DOMContentLoaded', loadDocument);
game.addEventListener('click', handlerGame);

function loadDocument() {
    for (let i = 1; i <= 9; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        game.appendChild(box);
    }
}

function handlerGame(e) {
    const event = e.target;

    if (!event.innerText && event.className === 'box') {
        if (current % 2 === 0) {
            event.innerText = 'X';
        } else {
            event.innerText = 'O';
        }
        current++;
        checkWin();
    }
}

function checkWin() {
    const boxes = document.querySelectorAll('.box');

    //for x
    if (
        boxes[0].innerText === 'X' &&
        boxes[1].innerText === 'X' &&
        boxes[2].innerText === 'X'
    ) {
        winner.innerText = 'X';
        modal.classList.add('active');
    }
    if (
        boxes[3].innerText === 'X' &&
        boxes[4].innerText === 'X' &&
        boxes[5].innerText === 'X'
    ) {
        winner.innerText = 'X';
        modal.classList.add('active');
    }
    if (
        boxes[6].innerText === 'X' &&
        boxes[7].innerText === 'X' &&
        boxes[8].innerText === 'X'
    ) {
        winner.innerText = 'X';
        modal.classList.add('active');
    }
    if (
        boxes[0].innerText === 'X' &&
        boxes[3].innerText === 'X' &&
        boxes[6].innerText === 'X'
    ) {
        winner.innerText = 'X';
        modal.classList.add('active');
    }
    if (
        boxes[1].innerText === 'X' &&
        boxes[4].innerText === 'X' &&
        boxes[7].innerText === 'X'
    ) {
        winner.innerText = 'X';
        modal.classList.add('active');
    }
    if (
        boxes[2].innerText === 'X' &&
        boxes[5].innerText === 'X' &&
        boxes[8].innerText === 'X'
    ) {
        winner.innerText = 'X';
        modal.classList.add('active');
    }
    if (
        boxes[0].innerText === 'X' &&
        boxes[4].innerText === 'X' &&
        boxes[8].innerText === 'X'
    ) {
        winner.innerText = 'X';
        modal.classList.add('active');
    }
    if (
        boxes[2].innerText === 'X' &&
        boxes[4].innerText === 'X' &&
        boxes[6].innerText === 'X'
    ) {
        winner.innerText = 'X';
        modal.classList.add('active');
    }

    //for O
    if (
        boxes[0].innerText === 'O' &&
        boxes[1].innerText === 'O' &&
        boxes[2].innerText === 'O'
    ) {
        winner.innerText = 'O';
        modal.classList.add('active');
    }
    if (
        boxes[3].innerText === 'O' &&
        boxes[4].innerText === 'O' &&
        boxes[5].innerText === 'O'
    ) {
        winner.innerText = 'O';
        modal.classList.add('active');
    }
    if (
        boxes[6].innerText === 'O' &&
        boxes[7].innerText === 'O' &&
        boxes[8].innerText === 'O'
    ) {
        winner.innerText = 'O';
        modal.classList.add('active');
    }
    if (
        boxes[0].innerText === 'O' &&
        boxes[3].innerText === 'O' &&
        boxes[6].innerText === 'O'
    ) {
        winner.innerText = 'O';
        modal.classList.add('active');
    }
    if (
        boxes[1].innerText === 'O' &&
        boxes[4].innerText === 'O' &&
        boxes[7].innerText === 'O'
    ) {
        winner.innerText = 'O';
        modal.classList.add('active');
    }
    if (
        boxes[2].innerText === 'O' &&
        boxes[5].innerText === 'O' &&
        boxes[8].innerText === 'O'
    ) {
        winner.innerText = 'O';
        modal.classList.add('active');
    }
    if (
        boxes[0].innerText === 'O' &&
        boxes[4].innerText === 'O' &&
        boxes[8].innerText === 'O'
    ) {
        winner.innerText = 'O';
        modal.classList.add('active');
    }
    if (
        boxes[2].innerText === 'O' &&
        boxes[4].innerText === 'O' &&
        boxes[6].innerText === 'O'
    ) {
        winner.innerText = 'O';
        modal.classList.add('active');
    }
}

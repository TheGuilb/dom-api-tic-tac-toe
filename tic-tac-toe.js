window.addEventListener("DOMContentLoaded", event => {
    const board = document.getElementById("tic-tac-toe-board");
    const square = document.querySelectorAll(".square");

    clickCounter = 0;
    board.addEventListener("click", event => {
        clickCounter++;
            if
            (event.target.innerText.length !== 0 ) {
                event.preventDefault();
                clickCounter--;
            } else if (clickCounter % 2 !== 0) {
                var player1 = "X";
                event.target.innerText = player1;
                console.log(event.target);
                console.log(player1);
            } else {
                var player2 = "O"
                event.target.innerText = player2;
            }

        console.log(clickCounter);
    });
});

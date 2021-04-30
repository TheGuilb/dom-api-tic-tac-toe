window.addEventListener("DOMContentLoaded", event => {
    const board = document.getElementById("tic-tac-toe-board");

    let header = document.getElementById("game-status")
    header.innerText = "";
    let newGameButton = document.getElementById("new-game");
    // newGameButton.setAttribute("class", "hide");
    let giveUpButton = document.getElementById("give-up");

    // if (header !== "") {
    //     newGameButton.classList.remove("hide");
    //     newGameButton.classList.add("show");
    // }
// make new game button functional in clearing board
// then make button unusable if game is still in play
// fix tie if win on last move
// if there is a win disable clicks on board
//
    newGameButton.addEventListener("click", () => {
        // const square = document.querySelectorAll(".square");
        arr =  Array(9).fill("");
        console.log(arr);
        header.innerText = "";
        for (let i = 0; i <= 9; i++) {
            let box = document.getElementById(`square-${i}`);
            console.log(box);
            box.innerHTML = "";
            console.log(box);
            clickCounter = 0;
            // newGameButton.disabled =  true;
            newGameButton.setAttribute("disabled", "true");
            // giveUpButton.disabled = true;
            giveUpButton.setAttribute("disabled", "true");
        }
    });

    giveUpButton.addEventListener("click", () => {
        arr =  Array(9).fill("");
        console.log(arr);
        header.innerText = "";
        for (let i = 0; i <= 9; i++) {
            let box = document.getElementById(`square-${i}`);
            console.log(box);
            box.innerHTML = "";
            clickCounter = 0;
            giveUpButton.setAttribute("disabled", "true");
            newGameButton.setAttribute("disabled", "true");
        }
    });
    let arr = Array(9).fill("");
    let gameStatus = () => {
        console.log(arr)
        newGameButton.removeAttribute("disabled");
        giveUpButton.setAttribute("disabled", "true");

        if(arr[0] === arr[1] && arr[1] === arr[2] && arr[2] !== ""){
            var winner = arr[0]
            header.innerText = `${winner} is the winner!`
        }
        if(arr[3] === arr[4] && arr[4] === arr[5] && arr[5] !== ""){
            var winner = arr[3]
            header.innerText = `${winner} is the winner!`
        }
        if(arr[6] === arr[7] && arr[7] === arr[8] && arr[8] !== ""){
            var winner = arr[6]
            header.innerText = `${winner} is the winner!`
        }
        if(arr[0] === arr[3] && arr[3] === arr[6] && arr[6] !== ""){
            var winner = arr[0]
            header.innerText = `${winner} is the winner!`
        }
        if(arr[1] === arr[4] && arr[4] === arr[7] && arr[7] !== ""){
            var winner = arr[1]
            header.innerText = `${winner} is the winner!`
        }
        if(arr[2] === arr[5] && arr[5] === arr[8] && arr[8] !== ""){
            var winner = arr[2]
            header.innerText = `${winner} is the winner!`
        }
        if(arr[0] === arr[4] && arr[4] === arr[8] && arr[8] !== ""){
            var winner = arr[0]
            header.innerText = `${winner} is the winner!`
        }
        if(arr[2] === arr[4] && arr[4] === arr[6] && arr[6] !== ""){
            var winner = arr[2]
            header.innerText = `${winner} is the winner!`
        }
        if (!arr.includes("")) {
            header.innerText = "It's a TIE -fighter"
        } else {
            // giveUpButton.setAttribute("disabled", "true");
        }
    }

    clickCounter = 0;
    board.addEventListener("click", event => {
        giveUpButton.removeAttribute("disabled");
        newGameButton.setAttribute("disabled", "true");
        console.log(event.target);
        if(!event.target.id.includes("square-")) return;
        let squrNum = event.target.id.split("-");

        let [square,number] = squrNum
            if(arr[number]) return;
            clickCounter++;

            if (clickCounter % 2 !== 0) {
                let playerXtoken = "X"
                const X = new Image();
                X.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"
                const playerX = X;
                event.target.appendChild(playerX)
                arr[number] = playerXtoken

            } else {
                let playerOtoken = "O"
                const O = new Image();
                O.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"
                const playerO = O
                event.target.appendChild(playerO)
                arr[number] = playerOtoken

            }
        console.log(arr)
        gameStatus();
        });
});

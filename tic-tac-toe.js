window.addEventListener("DOMContentLoaded", event => {
    const board = document.getElementById("tic-tac-toe-board");
    const square = document.querySelectorAll(".square");
    let header = document.getElementById("game-status")
    header.innerText = "";
    // if (header !== "") {
    //     event.preventDefault();
    // }
    const arr = Array(9).fill("");
    let gameStatus = () => {
        console.log(arr)
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
        // if (!arr.includes("")) {
        //     header.innerText = "It's a TIE -fighter"
        // }
    }

// console.log(arr)
    clickCounter = 0;
    board.addEventListener("click", event => {
        if(!event.target.id.includes("square-")) return;
        let squrNum = event.target.id.split("-");

        let [square,number] = squrNum
        //console.log(arr[number])
            //console.log(squrNum)
            // arr.push()
            if(arr[number]) return;
            clickCounter++;

            if (clickCounter % 2 !== 0) {
                let playerXtoken = "X"
                const X = new Image(115);
                X.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"
                const playerX = X;
                event.target.appendChild(playerX)
                arr[number] = playerXtoken
                var playerXmoves = clickCounter / 2 + .5;

                //arr.push(square[number])
                //console.log(arr)
                //console.log(playerXmoves)

            } else {
                let playerOtoken = "O"
                const O = new Image(120);
                O.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"
                const playerO = O
                event.target.appendChild(playerO)
                arr[number] = playerOtoken
                var playerOmoves = clickCounter / 2;

            }


        console.log(arr)
            if(clickCounter >= 5 ){
                gameStatus();

            }
        });
});

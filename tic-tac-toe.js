window.addEventListener("DOMContentLoaded", event => {
    const board = document.getElementById("tic-tac-toe-board");
    const square = document.querySelectorAll(".square");
    const header = document.getElementById("game-status")
    header.innerText = "";
    
    let arr = Array(9)
    
    let gameStatus = (arr) => {
        if(arr[0] === arr[1] && arr[1] === arr[2] && arr[2] !== ""){
            
        }
    }
    
    
    




console.log(arr)
    clickCounter = 0;
    board.addEventListener("click", event => {
        if(!event.target.id.includes("square-")) return; 
        let squrNum = event.target.id.split("-");
        
        let [square,number] = squrNum
        //console.log(arr[number])
            //console.log(squrNum)
            arr.push()
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
        if(arr.length >= 5 ){
            
        
            arr.forEach((ele, index) => {
                let one = arr[index]
                let two = arr[index +1];
                let three = arr[index +2]; 
                console.log(one)
                console.log(two)
                //if(){}
                
            })
        
        }
    
    
    
        });

        

    

});

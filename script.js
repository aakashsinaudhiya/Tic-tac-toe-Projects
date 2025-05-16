let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let msgCantainer = document.querySelector(".msg-cantainer");
let newBtn = document.querySelector(".new-btn");
let msg = document.querySelector("#msg");

let turnO = true; //for player

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgCantainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("click");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        cheakWinner();
    });
});

const diasableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;

    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";

    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation Winner is :${winner}`;
    msgCantainer.classList.remove("hide");
    diasableBoxes();
}

const tie = () =>{
    if(count==0){
       msg.innerText = "The Match is Tie";
       msgCantainer.classList.remove("hide");
       diasableBoxes();
    }
}

const cheakWinner = () => {
    let count=0;
    for (let pattern of winPattern) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("winner", pos1Val);
                showWinner(pos1Val);
                count++;
            }
        }
    }
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
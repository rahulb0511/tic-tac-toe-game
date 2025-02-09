let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let neww = document.querySelector("#new-btn");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6], 
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0==true)
        {
            box.style.color = "red"
            box.innerText = "O";
            turn0 = false;
        }
        else
        {
            box.style.color = "green"
            box.innerText = "X";
            turn0 = true;
        }
        box.style.backgroundColor = "black";
        box.disabled = true
        checkWinner();
    });
});

const checkWinner = () => {
    for(pattern of winPatterns) {
        let patt = boxes[pattern[0]].innerText + boxes[pattern[1]].innerText + boxes[pattern[2]].innerText;
        let boxCont = boxes[pattern[0]].innerText;
        
        if(patt=="XXX" || patt=="OOO") {
            console.log(`Winner is ${boxCont}`)
            showWinner(boxCont)
        }
    }
    return false;
}

const showWinner = (val) => {
    msg.innerText = `Congratulations, Winner is ${val}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const resetGame = () => {
    turn0 = true
    msgContainer.classList.add("hide");
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = ""
        box.style.backgroundColor = "#ffffc7"
    }
}

reset.addEventListener("click", resetGame)
neww.addEventListener("click", resetGame)
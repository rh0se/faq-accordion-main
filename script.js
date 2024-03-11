const questions = [
    document.getElementById("question-one"),
    document.getElementById("question-two"),
    document.getElementById("question-three"),
    document.getElementById("question-four")
]


const showAnswer = (event) => {
    let targetQuestion = event.target.value;
    if (targetQuestion === null || targetQuestion === undefined) {
        targetQuestion = event.target.getAttribute("id");
    } 
    const targetAnswer = document.getElementById(`${targetQuestion}-answer`);
    const plusButton = document.getElementById(`plus-${targetQuestion}`);
    console.log(targetQuestion);
    console.log(targetAnswer.style.display);
    if (targetAnswer.style.display === "none" || targetAnswer.style.display === "" ) {
        console.log(targetAnswer.style.display);
        plusButton.innerHTML = `<img src="./assets/images/icon-minus.svg" alt="plus" id="${targetQuestion}">`;
        targetAnswer.style.display = "block";
    } else {
        plusButton.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="plus" id="${targetQuestion}">`;
        targetAnswer.style.display = "none";
    }
    
}

questions.forEach(question => question.addEventListener("click", showAnswer));

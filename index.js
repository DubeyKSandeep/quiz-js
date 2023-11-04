const correctAnswer = ["C","C","B","D","A","A","B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const question = document.querySelectorAll(".question");

form.addEventListener("submit", event => {
    event.preventDefault();
    

    let score = 0;
    const userAnswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value];
    userAnswer.forEach((answer,index) =>
    {
        if(answer === correctAnswer[index]){
            score += 1;
            question[index].classList.add("correct");
        }
        else{
            question[index].classList.add("wrong");
        }
    });
    console.log(score);
    
    scroll(0,0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = `You scored ${score}/7`
});
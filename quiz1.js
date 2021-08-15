const quizForm = document.forms[0];
const scoreDiv = document.querySelector("#scoreDiv");
const submitQuiz = document.querySelector("#submitQuiz");

const correctAns = ["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3", "option3", "option3" ];
let score= 0;

quizForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(quizForm);
    let index=0;
    for(let entry of data){
       if(entry[1] == correctAns[index]){
        score++;
       }
       
        index++;
    }
    scoreDiv.textContent = 'Score: '+ score;
    submitQuiz.style.display= "none";
});
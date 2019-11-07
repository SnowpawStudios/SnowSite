
const qField = document.querySelector(".question");
const a1 = document.querySelector(".answer1");
const a2 = document.querySelector(".answer2");
const a3 = document.querySelector(".answer3");
const submitBtn = document.querySelector(".submitBtn");
const correctA = document.querySelector(".correctAnswer");
const form = document.querySelector(".quiz-form");
const answerWrapper = document.querySelector(".answer-wrapper");
const summary = document.querySelector(".summaryWrapper");
const summaryList = document.querySelector("ul");

const radiobtns = document.querySelectorAll(".rbtn");


let i = 0;

let score = 0;
let userA;
let userAnswers = [];
let submitted = false;
let reload = false;


submitBtn.addEventListener("click", checkAnswer);

window.onload = function(){
  this.init();
}

//initiatlize quiz
function init(){
  //this randomizes the array
  questions.sort(() => Math.random() - 0.5);


  //this sets the first text fields
  qField.innerHTML = `<p>${questions[i].question}</p>`;
  a1.textContent = questions[i].answer1;
  a2.innerText = questions[i].answer2;
  a3.innerText = questions[i].answer3;
  correctA.innerText = "";
}


function nextQuestion() {

  submitted = false;
  correctA.innerText = "";
  if (i < questions.length - 1) {
    i++;    
  } else {
    quizEnd();
  }
  qField.innerHTML = `<p>${questions[i].question}</p>`;
  radiobtns[0].checked = true;
  a1.textContent = questions[i].answer1;
  a2.innerText = questions[i].answer2;
  a3.innerText = questions[i].answer3;

}

function checkAnswer() {
  if(reload){
    reload = false;
    location.reload();
  }
  if (!submitted) {
    submitted = true;
    radiobtns.forEach((btn) => {
      if (btn.checked) {
        userA = btn.value;
      }
    });
    
    let userAnswerText = Object.values(questions[i])[userA];    
    userAnswers.push(userAnswerText);
    
    let correctAnswer = questions[i].correct;   
    
    
    if (document.getElementById(correctAnswer).checked) {      
      score++;     
    } 

    setTimeout(nextQuestion, 500);
  }
}

function quizEnd() {
  submitted = true;
  correctA.innerText =""; 
  //displays summary and score
  summary.innerHTML = `
  <h3>Summary</h3>
  <p class = "score">You scored: ${score}/${questions.length}</p>`

  //displays summary of q&a in summary wrapper
  questions.forEach((question, index) =>{
    summary.innerHTML += `
    <div class = "summary-box">
  <p> ${index+1}: ${question.question}</p>
  <p class = "correct"> Correct answer: ${Object.values(questions[index])[question.correct]}</p>
  <p>Your answer: ${userAnswers[index]}</p>
  </div>
  `
  });

  //changes button text to try again after 1 sec, reloads the window when user then presses button
  setTimeout(()=>{
submitBtn.innerText= "Try Again?";
reload = true;
  }, 1000);
}


//array of question/answer objects
const questions = [
  {
    question: "What do we remember on Anzac Day?",
    answer1: "The landing of the Australian and New Zealand Army Corps at Gallipoli, Turkey",
    answer2: "The arrival of the first free settlers from Great Britain",
    answer3: "The landing of the First Fleet at Sydney Cove",
    correct: 1
  },
  {
    question: "What are the colours of the Australian Aboriginal flag?",
    answer1: "Black, red and yellow",
    answer2: "Green, white and black",
    answer3: "Blue, white and green",
    correct: 1
  },
  {
    question: "Which official symbol of Australia identifies Commonwealth property?",
    answer1: "The national anthem",
    answer2: "Australia’s national flower",
    answer3: "Commonwealth Coat of Arms",
    correct: 3
  },
  {
    question: "Which of these statements about Australia’s system of government is correct?",
    answer1: "The Queen of Australia chooses people to form the Australian parliament",
    answer2: "The government is elected by the people",
    answer3: "The Prime Minister chooses our members of parliament",
    correct: 2
  },
  {
    question: "Which of these is an example of freedom of speech?",
    answer1: "People can peacefully protest against government decisions",
    answer2: "Men and women are treated equally in a court of law",
    answer3: "Australians are free to not follow a religion",
    correct: 1
  },
  {
    question: "Which of these statements about government in Australia is correct?",
    answer1: "The government does not allow some religions",
    answer2: "Government in Australia is secular",
    answer3: "Religious laws are passed by parliament",
    correct: 2
  },
  {
    question: "Which of these is an example of equality in Australia?",
    answer1: "Everyone follows the same religion",
    answer2: "Men and women have the same rights",
    answer3: "Everyone belongs to the same political party",
    correct: 2
  },
  {
    question: "Which of these is a responsibility of Australian citizens aged 18 years or over?",
    answer1: "To attend local council meetings",
    answer2: "To vote in elections",
    answer3: "To have a current Australian passport",
    correct: 2
  },
  {
    question: "Which of these statements about passports is correct?",
    answer1: "Australian citizens can apply for an Australian passport",
    answer2: "Permanent residents can hold an Australian passport",
    answer3: "Australian citizens need a passport and visa to return to Australia",
    correct: 1
  },
  {
    question: "Which of these statements about voting in Australian elections is correct?",
    answer1: "People are free and safe to vote for any candidate",
    answer2: "Voting is by a show of hands",
    answer3: "People must write their name on their vote",
    correct: 1
  },
  {
    question: "What happened in Australia on January 1, 1901?",
    answer1: "The Australian Constitution was changed by a referendum",
    answer2: "The Australian Constitution came into effect",
    answer3: "The Australian and New Zealand Army Corps was formed",
    correct: 2
  },
  {
    question: "What is the name of the legal document that sets out the rules for the government of Australia?",
    answer1: "The Australian Federation",
    answer2: "The Australian Commonwealth",
    answer3: "The Australian constitution",
    correct: 3
  },
  {
    question: "What is a referendum?",
    answer1: "A vote to change the government",
    answer2: "A vote to change the Australian Constitution",
    answer3: "A vote to change the Prime Minister",
    correct: 2
  },
  {
    question: "Which arm of government has the power to interpret and apply laws?",
    answer1: "Legislative",
    answer2: "Executive",
    answer3: "Judicial",
    correct: 3
  },
  {
    question: "Which of these is a role of the Governor-General?",
    answer1: "The appointment of state premiers",
    answer2: "The signing of Bills passed by the Australian parliament",
    answer3: "The appointment of the Head of State",
    correct: 2
  },
  {
    question: "Which of these statements about state governments is correct?",
    answer1: "All states have the same constitution",
    answer2: "Each state has its own constitution",
    answer3: "The states have no constitution",
    correct: 2
  },
  {
    question: "What is the name given to the party or coalition of parties with the second largest number of members in the House of Representatives?",
    answer1: "The Government",
    answer2: "The Opposition",
    answer3: "The Senate",
    correct: 2
  },
  {
    question: "What is the name of a proposal to make a law in parliament?",
    answer1: "Bill",
    answer2: "Royal Assent",
    answer3: "Debate",
    correct: 1
  },
  {
    question: "Who maintains peace and order in Australia?",
    answer1: "Public servants",
    answer2: "Lawyers",
    answer3: "Police",
    correct: 3
  },
  {
    question: "How many states and territories are there in Australia?",
    answer1: "6 states and 2 territories",
    answer2: "6 states and 1 territories",
    answer3: "4 states and 2 territories",
    correct: 1
  }
]

//This cuts the array length down using splice
// for (let i = 0; i < questions.length; i++) {
//   let random = Math.floor(Math.random() * questions.length);
//   let x = questions.splice(random, 1);
// }

//initialization
//this randomizes the array
//questions.sort(()=>Math.random() -0.5);


//this sets the first text fields
// qField.innerHTML = `<p>${questions[i].question}</p>`;
// a1.textContent = questions[i].answer1;
// a2.innerText = questions[i].answer2;
// a3.innerText = questions[i].answer3;
// correctA.innerText = "";






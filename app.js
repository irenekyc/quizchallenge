///////////////////////////////////// QUESTIONS /////////////////////////////////////
class Question {
    constructor (title, ansA, ansB, ansC, correct, correctFull){
        this.title= title,
        this.ansA= ansA,
        this.ansB= ansB,
        this.ansC= ansC,
        this.correct= correct,
        this.correctFull = correctFull
    
    }
};

const q = [];
for(i=1; i<=10; i++) {
    q[i] = {};
};

q[1] = new Question ('What is my real Chinese Name?', 'Ka Ku Chow', 'Ka Yi Chow', 'Ka Yu Chow', 'c', 'Ka Yu Chow' );
q[2] = new Question ('What is my favourite color?', 'Red', 'Blue', 'Pink', 'a', 'Red');
q[3] = new Question ('What is my lucky number?' ,'7', '9', '1', 'a', '7');
q[4] = new Question ('Which one is my favourite country?', 'Australia', 'Germany', 'Netherland', 'b', 'Germany');
q[5] = new Question ('Which is my favourite jewerly?', 'Jade', 'Diamond', 'Crystal', 'b', 'Diamond');
q[6] = new Question ('Which one was my favrourite subject in high school?', 'History', 'Economics', 'English', 'a', 'History');
q[7] = new Question ('Which university did I go for my Bachelor Degree?', 'CityU', 'PolyU', 'HKUST', 'a', 'CityU');
q[8] = new Question ('Where did I study my Master Degree?', 'England', 'Hong Kong', 'Scotland', 'c', 'Scotland');
q[9] = new Question ('What did I study for my Master Degree?', 'Economics', 'Marketing', 'Business Adminstrations', 'b', 'Marketing');
q[10] = new Question ('What do I want for Valentine Day?', 'Lobster Sandwich :)', 'Apple Pen :)', 'NickBohanan ;)', 'c');



let correctAnswers = [];
let correctFullAnswers = [];
for (i=1; i<=10; i++){
    const curQ = q[i];
    correctAnswers[i] = curQ.correct;
    correctFullAnswers[i] = curQ.correctFull;
};

const titleText = {
    start: ` <h3 class="start-title">This is a quiz about me. There are 10 questions. Please answer thoughtfully. 
             You will get one point if you answer correctly. One point will be deducted if you select the wrong answer.</h3>
            <h2 class="start-description"> Good Luck!</h2>`,
    startBtn: ` <div class="start-btn" id="start">
                <span class="start-text id="start"> Let's Start </span>
                </div>`,
    correct: `<h3 class="start-title"> Congratulations! You earn 10 points!</h3>`,
    next: `<div class="next-btn" id="large-btn">
            <span class="next-text"> Next </span>
            </div>`,
    finish: `<h3 class="start-title"> Congratulations! You finially make it here! All I WANT FOR VALENTINE is my</h3>
    <h1 class="start-title">LOBSTER IDIOT SANDWICHES!</h1>`,
    finishBtn: `<div class="finish-btn" id="large-btn">
                <span class="next-text"> FINISH! </span>
                </div>`
}

const containers = {
    text: document.querySelector('.question-container'),
    answer: document.querySelector('.answer-container'),
    answerBtn: document.querySelectorAll('div.answer-box'),
    BtnA: document.querySelector('.answer-a'),
    BtnB: document.querySelector('.answer-b'),
    BtnC: document.querySelector('.answer-c'),
    score: document.querySelector('.score'),
}

const answerList = containers.answerBtn;
let currentQ;
let initScore = 0;



///////////////////////////////////// CONTROLLER ///////////////////////////////////
// 1. START BUTTON ///
containers.answer.addEventListener('click', e =>{
    if( e.target.matches('.start-btn, .start-btn *')) {
        currentQ = 1;
        displayQuestion(currentQ);      
    }
 })

// 2. ANSWER BUTTON ///
containers.answer.addEventListener('click', e=>{
    if( e.target.matches('.answer-box-active, .answer-box-active *')) {
        containers.text.innerHTML = "";
        containers.answer.innerHTML ="";
        let correctAns, inputAnswer;
        correctAns = correctAnswers[currentQ];
       inputAnswer = e.target.id;
       checkAnswer(inputAnswer, correctAns, currentQ);
     }});

// 3. NEXT BUTTON ///
containers.answer.addEventListener('click', e=>{
    if (e.target.matches('.next-btn, .next-btn *')){
        currentQ = currentQ + 1;
        displayQuestion(currentQ);
    }
})

////////////////////////////////////// UI /////////////////////////////////////////////

//////// START /////////////
const init = ()=>{
    //1. instruction
    containers.text.insertAdjacentHTML('afterbegin', titleText.start);
    containers.answer.insertAdjacentHTML('afterbegin', titleText.startBtn);
    containers.score.textContent=initScore;
   // containers.score.textContent=score;
}


/////// QUESTION AND ANSWER ////////
const displayQuestion = (currentQ) => {
    containers.text.innerHTML = " ";
    containers.answer.innerHTML= "";
    containers.text.insertAdjacentHTML('beforeend', `<h1 class="start-title"> ${q[currentQ].title} </h1>`);
    let curAns = displayAnswer(q[currentQ]);
    containers.answer.insertAdjacentHTML('beforeend', curAns);
    
}

const displayAnswer = (curQ) =>{
    answer = `
    <div class="answer-box answer-box-active" id="a">
                   <span class="answer-a" id="a" > ${curQ.ansA} </span>
               
               </div>
               <div class="answer-box answer-box-active" id="b">
                   <span class="answer-b" id="b" > ${curQ.ansB}</span>
               
               </div>
               <div class="answer-box answer-box-active" id="c">
                   <span class="answer-c" id="c"> ${curQ.ansC}</span>
               
               </div>
    `;
    return answer;
}

const checkAnswer = (curInput, corAns, curQ) => {
    if (curQ < 10) {
        if (curInput === corAns) {
            //prepare UI to display correct 
            containers.text.innerHTML = titleText.correct;
            containers.answer.innerHTML = titleText.next;
            displayScore();         
    } else {
            // prepare UI to display wrong
            containers.text.innerHTML = displayWrong(curQ);
            containers.answer.innerHTML = titleText.next;
        }
    } else if (curQ >= 10) {
        displayFinish();
        displayScore();
    }

    }

const displayWrong = (curQ) => {
    correctAns = correctFullAnswers[curQ];
    correct = `<h3 class="start-title"> So Sad! The correct answer is ${correctAns} . </h3>`;
    return correct;
    
}

let score = 0;
const displayScore = () => {
    score = score + 10;
    containers.score.textContent = score;
}



const displayFinish = ()=>{
    containers.text.innerHTML = titleText.finish;
    containers.answer.innerHTML = "";

}



/////// FINISH ////////


init();
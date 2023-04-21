const quizData = [{
    question: "Which HTML tag is used to declare internal CSS?",
    a: "<script>",
    b: "<link>",
    c: "<style>",
    d: "none of the above",
    correct: "c",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Machine Language",
    c: "Hypertext Marking Language",
    d: "HighText Marking Language",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Color and Style Sheets",
    b: "Cascading Style Sheet",
    c: "Coloured and Special Sheets",
    d: "none of the above",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans == data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
document.getElementsByClassName("inner-div")[0].innerHTML =`
    <div class="question">
        <h3 class="questionbox"> Hii, you've scored ${correct} / ${total} </h3>
        </div>
`
}
loadQuestion(index);
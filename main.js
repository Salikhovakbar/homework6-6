
const formEl = document.querySelector(".form-sourvey")
const divInput = document.querySelector(".input-box")
let answers = JSON.parse(localStorage.getItem('info'))
let sourvey = answers

if(answers === null){
sourvey = null
let name = prompt("Enter your name")
let age = prompt("Enter your age")
    localStorage.setItem('info', JSON.stringify([name, age]))
window.location.reload()
}
else{
    sourvey = answers
}
let arr = [
    {
        question: 'Your name',
        answer: answers[0]
    },
    {
        question: "Your age",
        answer: answers[answers.length - 1]
    }
]

function* show(){
    for(let i of arr){
        let answer = yield i.question
        console.log(answer === i.answer);
    if(answer !== i.answer){
        alert('Please try again')
    }    
    else{
        alert('well done')
    }
    }
}
let generator = show()
let answer;
for(let i of arr){
    const inputEl = document.createElement("input")
    divInput.appendChild(inputEl)
    answer = inputEl.value
    inputEl.setAttribute("placeholder", i.question)
    const input = document.querySelectorAll("input")
    formEl.addEventListener("submit", () => {
input.forEach(e => {
    generator.next(e.value)
});
    })
}
btn.addEventListener('click', () => {
localStorage.removeItem('info')
window.location.reload()
})
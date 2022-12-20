const startButton=document.getElementById('start-btn')
const nextButton=document.getElementById('next-btn')

const questionContainerElement=document.getElementById('question-container')
const questionElement= document.getElementById('question')
const answerButtonsElement=document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setNextQuestion()
})



function startGame() {
    // console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(()=> Math.random()-.5)
    currentQuestionIndex=0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText=question.question
    question.answers.forEach(answer => {
        const button=document.createElement('button')
        button.innerText=answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct=answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct= selectedButton.dataset.correct
    setStatusClass(document.body,correct) 
    Array.from(answerButtonsElement.children).forEach(button=> {
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex+1) {
        nextButton.classList.remove('hide')    
    }
    else {
        startButton.innerText='Restart'
        startButton.classList.remove('hide')

    }

}

function setStatusClass(element,correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    }else {
        element.classList.add('wrong')
    }

}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}




//--------------------------------------------------------------------//
const questions = [
    {
        question:'How many minutes are in a full week?',
        answers: [
            {text:'10,080',correct:true},
            {text:'20002',correct:false},
            {text:'11098',correct:false},
            {text:'12902',correct:false}
        ]
    }, 
    {
        question:'What artist has the most streams on Spotify?',
        answers: [
            {text:'YO YO',correct:false},
            {text:'Drake',correct:true},
            {text:'Badshah',correct:false},
            {text:'Arijit Singh',correct:false}
        ]
    },
    {
        question:'Kratos is the main character of what video game series?',
        answers: [
            {text:'Avengers',correct:false},
            {text:'Strangers',correct:false},
            {text:'War of God',correct:false},
            {text:'God of War',correct:true}
        ]
    },
    {
        question:'What Netflix show had the most streaming views in 2021?',
        answers: [
            {text:'Money Heist',correct:false},
            {text:'Squid Game',correct:true},
            {text:'1899',correct:false},
            {text:'Sex Education',correct:false}
        ]
    },
    {
        question:'What software company is headquartered in Redmond, Washington?',
        answers: [
            {text:'Amazon',correct:false},
            {text:'IBM',correct:false},
            {text:'Microsoft',correct:true},
            {text:'Google',correct:false}
        ]
    },
    {
        question:'How many hearts does an octopus have?',
        answers: [
            {text:'2',correct:false},
            {text:'1',correct:false},
            {text:'3',correct:true},
            {text:'4',correct:false}
        ]
    },
    {
        question:'What is the most common employment industry in India?',
        answers: [
            {text:'IT',correct:true},
            {text:'IAS',correct:false},
            {text:'Medical',correct:false},
            {text:'YouTube',correct:false}
        ]
    },
    {
        question:'Who has the most followers on Insta?',
        answers: [
            {text:'Virat Kohli',correct:false},
            {text:'PM Narendra Modi',correct:false},
            {text:'Cristiano Ronaldo',correct:true},
            {text:'Komal Pandey',correct:false}
        ]
    },
    {
        question:'What city is known as "The Eternal City"? ',
        answers: [
            {text:'California',correct:false},
            {text:'Agra',correct:false},
            {text:'Dubai',correct:false},
            {text:'Rome',correct:true}
        ]
    },
    {
        question:'What is the worlds fastest bird?',
        answers: [
            {text:'Frigatebird',correct:false},
            {text:'The Peregrine Falcon',correct:true},
            {text:'Golden eagle',correct:false},
            {text:'Rock dove',correct:false}
        ]
    },
    {
        question:'The answer is really big',
        answers: [
            {text:'An elephant',correct:false},
            {text:'THE ANSWER',correct:true},
            {text:'The data given is insufficient',correct:false},
            {text:'Really big',correct:false}
        ]
    },
    {
        question:'How many 0.5cm slices can you cut from a bread that is 25cm long?',
        answers: [
            {text:'20',correct:false},
            {text:'25',correct:false},
            {text:'50',correct:true},
            {text:'4',correct:false}
        ]
    },
    {
        question:'A farmer has 17 goats. All of them but 8 die. How many goats are alive?',
        answers: [
            {text:'8',correct:true},
            {text:'10',correct:false},
            {text:'30',correct:false},
            {text:'25',correct:false}
        ]
    },
    {
        question:'There are 45 mangoes in your basket. You take three out of the basket. How many mangoes are left?',
        answers: [
            {text:'20',correct:false},
            {text:'10',correct:false},
            {text:'42',correct:false},
            {text:'45',correct:true}
        ]
    }
]

// Soon add more questions


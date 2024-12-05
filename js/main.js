const quizQuestions = [

    {
         question:'What is the legal blood alcohol concentration (BAC) limit for drivers in most countries?',
         options:{
            a:'0.08%',
            b:'0.10%',
            c:'0.05%',
            d:'0.15%',
         },

         correctAnswer:'a'
    },

    {

        question:'When should you use your car’s horn?',
        options:{
           a:'To warn others of danger',
           b:'To express frustration',
           c:'To tell someone to drive faster',
           d:'To greet a friend', 
        },
        
        correctAnswer:'a'
    },

    {
        question:'What does a red traffic light mean?',
        options:{
            a:'Stop',
            b:'Slow down',
            c:'Proceed with caution',
            d:'Speed up',  
        },
       
        correctAnswer:'a'

    },
    
    {
        question:'What is the correct action when approaching a pedestrian at a crosswalk?',
        options:{
            a:'Speed up and pass before the pedestrian crosses',
            b:'Stop and let the pedestrian cross',
            c:'Honk at the pedestrian to hurry',
            d:'Ignore the pedestrian if they are not paying attention',
        },
        

        correctAnswer:'b'
    }

    ,

    {
        question:'What should you do if your car starts to skid?',
        options:{
          a:'Slam on the brakes',
          b:'Turn the steering wheel in the opposite direction of the skid',
          c:'Turn the steering wheel in the direction of the skid',
          d:'Accelerate',
   
        }
        ,
        correctAnswer:'c'
       
    }

    ,

    {
        question:'What is the primary purpose of seat belts?',

        options:{
            a:'To keep you comfortable',
            b:'To protect you during a collision',
            c:'To avoid police fines',
            d:'To improve fuel efficiency',  
        },
        
        correctAnswer:'c'
    },


    {
       
        question:'What is the safest distance to keep between your car and the vehicle in front of you?',
        options:{
            a:'1 second',
            b:'2 seconds',
            c:'5 seconds',
            d:'10 seconds',
        },
        

        correctAnswer:'b'

    }
    ,
   
    {

        question:'When should you turn on your headlights?',
        options:{
           a:'Only at night',
            b:'During the day in well-lit areas',
            c:'When visibility is poor, such as in fog or heavy rain',
            d:' Only when other cars flash their headlights at you',
        },
        
        correctAnswer:'d'
    }

]

const start = document.querySelector('#start-quiz')
const answerOne = document.querySelector('#ansOne')
const answerTwo = document.querySelector('#ansTwo')
const answerThree = document.querySelector('#ansThree')
const answerFour = document.querySelector('#ansFour')
const quizData = [answerOne,answerTwo,answerThree,answerFour]
start.addEventListener('click',startTimer)

let currentQuestionIndex = 0
let userAnswers = []
let score = 0


function renderQuiz(){

    const questionConteiner = document.querySelector('.quiz-container')

    const optionsConteiner = document.querySelector('.options-container')

    const currentQuestion = quizQuestions[currentQuestionIndex]

    questionConteiner.textContent = currentQuestion.question

    optionsConteiner.innerHTML = ''


    Object.keys(currentQuestion.options).forEach(optionKey =>{

         const optionButton = document.createElement('button')

        optionButton.textContent = currentQuestion.options[optionKey];

        optionButton.addEventListener('click', function(){


        })

    })
}






//renderQuiz()


function startTimer(){

    function timer(duration,display){

        let timer = duration, seconds,minutes;
    
        setInterval(function(){

            minutes = parseInt(timer / 60, 10)
            seconds = (parseInt(timer % 60, 10))
    
            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds
    
            display.textContent = minutes + ':' + seconds
    
            if(--timer < 0){
                timer = 0 
            }
        },1000)
    }
    

    let time  = 20 * 60;

    let display = document.querySelector('#timer')

    timer(time,display)

}



















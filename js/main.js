const quizQuestions = [
    {
        question: 'What is the legal blood alcohol concentration (BAC) limit for drivers in most countries?',
        options: {
            a: '0.08%',
            b: '0.10%',
            c: '0.05%',
            d: '0.15%',
        },
        correctAnswer: 'a'
    },
    {
        question: 'When should you use your car’s horn?',
        options: {
            a: 'To warn others of danger',
            b: 'To express frustration',
            c: 'To tell someone to drive faster',
            d: 'To greet a friend',
        },
        correctAnswer: 'a'
    },
    {
        question: 'What does a red traffic light mean?',
        options: {
            a: 'Stop',
            b: 'Slow down',
            c: 'Proceed with caution',
            d: 'Speed up',
        },
        correctAnswer: 'a'
    },
    {
        question: 'What is the correct action when approaching a pedestrian at a crosswalk?',
        options: {
            a: 'Speed up and pass before the pedestrian crosses',
            b: 'Stop and let the pedestrian cross',
            c: 'Honk at the pedestrian to hurry',
            d: 'Ignore the pedestrian if they are not paying attention',
        },
        correctAnswer: 'b'
    }
];

let currentQuestionIndex = 0;
let score = 0;

function renderQuiz() {
    const questionContainer = document.querySelector('#question-text');
    const optionsContainer = document.querySelector('#options-container');

    const currentQuestion = quizQuestions[currentQuestionIndex];

    // Set the question text
    questionContainer.textContent = currentQuestion.question;

    // Clear existing options
    optionsContainer.innerHTML = '';

    // Populate options dynamically
    Object.keys(currentQuestion.options).forEach(optionKey => {
        const answerContainer = document.createElement('div');
        answerContainer.className = 'answer-container';

        const input = document.createElement('input');
        input.type = 'radio';
        input.id = `option-${optionKey}`;
        input.name = 'answer';
        input.value = optionKey;

        const label = document.createElement('label');
        label.htmlFor = `option-${optionKey}`;
        label.textContent = currentQuestion.options[optionKey];

        answerContainer.appendChild(input);
        answerContainer.appendChild(label);
        optionsContainer.appendChild(answerContainer);
    });

    // Adjust navigation buttons visibility
    document.querySelector('#prev-btn').classList.toggle('hidden', currentQuestionIndex === 0);
    document.querySelector('#next-btn').classList.toggle('hidden', currentQuestionIndex === quizQuestions.length - 1);
    document.querySelector('#submit-test').classList.toggle('hidden', currentQuestionIndex !== quizQuestions.length - 1);
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert('Please select an answer.');
        return;
    }

    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOption.value === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        renderQuiz();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const questionContainer = document.querySelector('#question-text');
    const optionsContainer = document.querySelector('#options-container');
    questionContainer.textContent = `Quiz Complete! Your score is ${score}/${quizQuestions.length}.`;
    optionsContainer.innerHTML = '';
    document.querySelector('.navigation-buttons').classList.add('hidden');
    document.querySelector('#submit-test').classList.add('hidden');
}

function startTimer() {
    const display = document.querySelector('#timer');
    let time = 20 * 60; // 20 minutes in seconds

    const interval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        time--;

        if (time < 0) {
            clearInterval(interval);
            endQuiz();
        }
    }, 1000);
}

// Event listeners
document.querySelector('#start-quiz').addEventListener('click', () => {
    document.querySelector('.start-section').classList.add('hidden');
    document.querySelector('.quiz-container').classList.remove('hidden');
    startTimer();
    renderQuiz();
});

document.querySelector('#prev-btn').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuiz();
    }
});

document.querySelector('#next-btn').addEventListener('click', checkAnswer);

document.querySelector('#submit-test').addEventListener('click', endQuiz);
class Question {
    constructor(questionText, questionOptions, questionValues) {
        this.text = questionText;
        this.options = questionOptions;
        this.values = questionValues;
    }
}

const playerViewHeader = (playerName) => {
    return (
        `<style>
            #player-header {
                height: 15rem;
                background-color: rgba(0, 0, 0, 0.75);
            }

            h1 {
                text-align: center;
                color: white;
                font-size: 12rem;
            }
        </style>
        <header id='player-header'>
            <h1>${playerName}</h1>
        </header>
        `
    );
}
const playerViewQuestion = (question) => {
    return (
        `<style>
        </style>
        <div>
            <h2>Current Question:</h2>
            <p>${question.text}</p>
            ${playerViewQuestionForm(question.options, question.values)}
        </div>
        `
    );
}
const playerViewQuestionForm = (questionOptions, questionValues) => {
    return (
        `<style>
        </style>
        <form>
            <label>
                ${questionOptions[0]}
                <input type='radio' name='playerAnswer' value='${questionValues[0]}'>
            </label>
            <label>
                ${questionOptions[1]}
                <input type='radio' name='playerAnswer' value='${questionValues[1]}'>
            </label>
            <label>
                ${questionOptions[2]}
                <input type='radio' name='playerAnswer' value='${questionValues[2]}'>
            </label>
            <label>
                ${questionOptions[3]}
                <input type='radio' name='playerAnswer' value='${questionValues[3]}'>
            </label>
            <button type='submit'>Send Answer!</button>
        </form>
        `
    );
}
const playerView = (playerName, question) => {
    return (
        `<style>
            html, body {
                height: 100%;
            }
            body {
                background-image:
                    linear-gradient(
                        rgba(255, 100, 100, 0.4),
                        rgba(255, 100, 100, 0.4)
                    ),
                    url('background_test.gif');
            }
        </style>
        ${playerViewHeader(playerName)}
        ${playerViewQuestion(question)}`
    );
}


$(document).ready(function() {
    sampleQuestion = new Question(
        'What is the best color?',
        ['red', 'green', 'blue', 'yellow'],
        ['red', 'green', 'blue', 'yellow']
    );
    $('body').append(playerView('Jaime', sampleQuestion));
});

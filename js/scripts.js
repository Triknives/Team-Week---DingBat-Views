class Question {
    constructor(questionText, questionOptions) {
        this.text = questionText;
        this.options = questionOptions;
    }
}

const playerViewHeader = (playerName) => {
    return (
        `
        <header id='player-header'>
            <style>
                #player-header {
                    height: 15vh;
                    background-color: rgba(0, 0, 0, 0.75);
                    padding: 1rem;
                    font-size: 100%;
                    margin-bottom: 5vh;
                }
                #player-header h1 {
                    height: 100%;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    font-size: ${12 - 0.4*(playerName.length)}vh;
                    line-height: ${12 - 0.4*(playerName.length)}vh;
                    text-align: center;
                    color: white;
                    overflow: hidden;
                }
            </style>

            <h1>${playerName}</h1>
        </header>
        `
    );
}
const playerViewQuestion = (question) => {
    return (
        `
        <main>
            <style>
                main {
                    width: 80%;
                    margin: 0 auto;
                }
            </style>
            ${playerViewQuestionForm(question.options)}
        </main>
        `
    );
}
const playerViewQuestionForm = (questionOptions) => {
    return (
        `
        <form id='question-form'>
            <style>
                #input-options {
                    display: flex;
                    flex-direction: column;
                }
                .radio-button {
                    margin: 1vh;
                }
                .radio-button p {
                    height: 10vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 4vh;
                    border-radius: 10vh;

                    border: 5px solid black;
                    background-color: rgba(255, 255, 255, 0.8);
                    color: black;
                }
                .radio-button input:checked + .option-text {
                    border: 5px solid white;
                    background-color: rgba(0, 0, 0, 0.6);
                    color: white;
                    animation: 1s selected linear infinite;
                }
                @keyframes selected {
                    0%, 50%, 100% {
                        box-shadow: 0 0 6px 6px black;
                        transform: rotateZ(0deg)
                    }
                    25% {
                        box-shadow: 0 0 3px 3px black;
                        transform: rotateZ(-1.5deg);
                    }
                    75% {
                        box-shadow: 0 0 3px 3px black;
                        transform: rotateZ(1.5deg);
                    }
                }

                .radio-button input {
                    display: none;
                }

                #question-form button {
                    height: 15vh;
                    font-size: 5vh;
                }
            </style>
            <div id='input-options'>
                ${
                    questionOptions.map(
                        (option, index) => {
                            return playerViewQuestionFormLabel(option, index);
                        }
                    ).join('\n')
                }
            </div>
            <button type='submit'>Send Answer!</button>
        </form>
        `
    );
}
const playerViewQuestionFormLabel = (text, index) => {
    return (
        `
        <label class='radio-button'>
        <input type='radio' name='playerAnswer' value='${index + 1}'>
            <p class='option-text'>${text}</p>
        </label>
        `
    );
}
const playerView = (playerName, question) => {
    colors = [randColor(), randColor(), randColor()]
    return (
        `
        <style>
            body {
                background-image:
                    linear-gradient(
                        rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.5),
                        rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.5)
                    )/*,
                    url('background_test.gif')*/;
            }
        </style>
        ${playerViewHeader(playerName)}
        ${playerViewQuestion(question)}
         `
    );
}

function randColor() {
    return Math.floor(Math.random() * 255)
}


$(document).ready(function() {
    sampleQuestion = new Question(
        'What if this question is pretty long and we run out of room on the page? Uh oh. WAAAAAAY longer lets see if this shit works yee haw',
        ['Red', 'Blue', 'Green', 'Yellow']
    );
    $('body').append(playerView('J', sampleQuestion));
});

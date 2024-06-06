// get all the elements from html document
const container__username = document.querySelector(".container__username");
const username = document.querySelector(".username");
const startButton = document.querySelector(".startButton");
const spinner__wrapper = document.querySelector(".spinner__wrapper");
const error_icon = document.querySelector(".error_icon");
const error_icon_two = document.querySelector(".error_icon_two");
const container__level = document.querySelector(".container__level");
const options = document.querySelectorAll(".option");
const container__player__interface = document.querySelector(".container__player__interface");
const display_username = document.querySelector(".display__username");
const submitButton = document.querySelector(".submitButton");
const user_guess = document.querySelector(".user_guess");
const display__result = document.querySelector(".container__result");
const result = document.querySelector(".result");
const nav__life = document.querySelector(".life");
const nav__score = document.querySelector(".score");
const reset__button = document.querySelector(".reset__button");
const try__button = document.querySelector(".try__button");

// assigning values to variables
let generatedNumber = null;
let score = null;

if (localStorage.getItem("guess_player_name")) { 
    username.value = localStorage.getItem("guess_player_name")
}


let currentScore = localStorage.getItem("guess_game_score") ?
    parseInt(localStorage.getItem("guess_game_score")) : 0;

let life = localStorage.getItem("life") ?
    parseInt(localStorage.getItem("life")) : 5;

nav__life.textContent = life;
nav__score.textContent = currentScore;


    // add event listeners to the start button
    startButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (life <= 0) {
            reset();
            return;
        }
        // check if the user has entered username
        if (username.value === "") {
            // alert("Please enter a username");
            username.classList.add("error");
            error_icon.classList.remove("hide")
            username.placeholder = "Please enter a username";
            return;
        } else {
            // alert("Please enter a username");
            localStorage.setItem("guess_player_name", username.value)
            display_username.textContent = username.value.length > 6 ?
                username.value.substring(0, 6) + "..." :
                username.value;
            
            username.classList.remove("error");
            error_icon.classList.add("hide")
            username.placeholder = "";
        }
    
        container__username.classList.add("hide");
        spinner__wrapper.classList.remove("hide_spinner")
    
        setInterval(() => {
            spinner__wrapper.classList.add("hide_spinner")
            container__level.classList.remove("hide")
        }, 10000)
    })
    
    options.forEach((option, index) => {
        option.addEventListener("click", (e) => {
            e.preventDefault();
            
            switch (index) {
                case 0:
                    score = 5;
                    break;
                case 1:
                    score = 20;
                    break;
                case 2:
                    score = 50;
                    break;
                default:
                    break;
            }
    
            container__level.classList.add("hide_2");
            spinner__wrapper.classList.remove("hide_spinner");
            
            const lvl = e.target.dataset.level;
            generatedNumber = parseInt((Math.random() * lvl) + 1);
            
            setInterval(() => {
                spinner__wrapper.classList.add("hide_spinner");
                setTimeout(() => {
                    container__player__interface.classList.remove("hide");
                }, 100)
            }, 4800)
    
        })
    })
    
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
    
        if (!localStorage.getItem("guess_game_score")) {
            localStorage.setItem("guess_game_score", currentScore);
        }
    
        if (user_guess.value === "") {
            // alert("Please enter a username");
            user_guess.classList.add("error");
            error_icon_two.classList.remove("hide")
            user_guess.placeholder = "Please enter a guess";
            return;
        } else {
            user_guess.classList.remove("error");
            error_icon_two.classList.add("hide")
            user_guess.placeholder = "";
            // alert("Gen Num: " + generatedNumber + ", user guess: " + user_guess.value);
            spinner__wrapper.classList.remove("hide_spinner");
            spinner__wrapper.style.backgroundColor = "rgba(100, 100, 100, 0.5";
            let isEqual = generatedNumber === parseInt(user_guess.value) ? true : false;
            life -= 1
            localStorage.setItem("life", life);
            
            setInterval(() => {
                spinner__wrapper.classList.add("hide_spinner");
                setTimeout(() => { 
                    if (isEqual) {
                        result.textContent = "Congratulations!";
                        // update localStorage score
                        localStorage.setItem("guess_game_score", updateScore(currentScore, score));
                    } else {
                        result.textContent = "Try again later!";
                    }
                    display__result.classList.remove("hide");
                    nav__life.textContent = life;
                    nav__score.textContent = localStorage.getItem("guess_game_score");
                    if (life === 0) {
                        result.textContent = "Game over!";
                        reset__button.classList.remove("hide");
                    }
                }, 50)
            }, 5000)
        }
    
    })
    
    const updateScore = (currentScore, score) => {
        return currentScore += score;
    }
  


reset__button.addEventListener("click", () => {
    reset();
});

const reset = () => {
    life = 5;
    nav__score.textContent = 0;
    reset__button.classList.add("hide");
    localStorage.removeItem("life");
    localStorage.removeItem("guess_game_score");
    localStorage.removeItem("guess_player_name");
}

try__button.addEventListener("click", () => {
    display__result.classList.remove("hide");
    window.location.reload();
});

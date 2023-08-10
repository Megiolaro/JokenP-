const texto = document.querySelector(".result")
const pontuacaoMaquina = document.querySelector("#machine-score")
const pontuacaoHuman = document.querySelector("#human-score")

let humanScoreNumber = 0
let machineSocreNumber = 0

const playHuman = (humanChoice) => {

    playGame(humanChoice, machineChoice())

}

const machineChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const playGame = (human, machine) => {

    if (human === machine) {
        texto.innerHTML = "Empate!"
        texto.style.color = "black"
    }
    else if
        ((human === "rock" && machine === "scissors") ||
        (human === "scissors" && machine === "paper") ||
        (human === "paper" && machine === "rock")) {
        texto.innerHTML = "Vitoria!"
        texto.style.color = "green"
        humanScoreNumber++
        pontuacaoHuman.innerHTML = humanScoreNumber
    }
    else {
        texto.innerHTML = "Derrota!"
        texto.style.color = "red"
        machineSocreNumber++
        pontuacaoMaquina.innerHTML = machineSocreNumber
    }
}



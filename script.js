const texto = document.querySelector(".result")
const pontuacaoMaquina = document.querySelector("#machine-score")
const pontuacaoHuman = document.querySelector("#human-score")
const escolhaMaquina = document.querySelector(".escolha-maquina")

let humanScoreNumber = 0
let machineSocreNumber = 0

const playHuman = (humanChoice) => {

    playGame(humanChoice, machineChoice())

}

const machineChoice = () => {
    const choices = ["Pedra", "Papel", "Tesoura"]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const playGame = (human, machine) => {

        console.log("Humano: " + human)
        console.log("Maquina: " + machine)

    if (human === machine) {
        texto.innerHTML = "Empate!"
        texto.style.color = "black"
        escolhaMaquina.innerHTML = machine
    }
    else if
        ((human === "Pedra" && machine === "Tesoura") ||
        (human === "Tesoura" && machine === "Papel") ||
        (human === "Papel" && machine === "Pedra")) {
        escolhaMaquina.innerHTML = machine
        texto.innerHTML = "Vitoria!"
        texto.style.color = "green"
        humanScoreNumber++
        pontuacaoHuman.innerHTML = humanScoreNumber

    }
    else {
        escolhaMaquina.innerHTML = machine
        texto.innerHTML = "Derrota!"
        texto.style.color = "red"
        machineSocreNumber++
        pontuacaoMaquina.innerHTML = machineSocreNumber
    }
}



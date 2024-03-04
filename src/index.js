let nome = "hulk"
let xp = 6230

if (xp < 1000){
    xp = "Ferro"
} else if (xp > 1001 && xp < 2000){
    xp = "Bronze"
} else if (xp > 2001 && xp < 5000){
    xp = "Prata"
} else if (xp > 5001 && xp < 7000){
    xp = "Ouro"
} else if (xp > 7001 && xp < 8000){
    xp = "Platina"
} else if (xp > 8001 && xp < 9000){
    xp = "Ascendente"
} else if (xp > 9001 && xp < 1000){
    xp = "Imortal"
} else if (xp > 1001){
    xp = "Radiante"
} else {
    console.log("Valor de experiência não existe!")
}
console.log("O herói " + nome + " está no nível " + xp)
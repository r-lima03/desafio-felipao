/* Desafio Classificador de nível de Herói */

/* 1º Passo: criando variáveis para o nome do Herói a quantidade de XP e o nível */

let nome = "Scynx";
let xp = 7500;
let nivel;

/* 2º Passo: criando instruções para a estrutura de decisão para determinar o nível do herói com base no valor da XP */

if (xp < 1000) {
    nivel = "Ferro";
}

else if (xp >= 1000 && xp <= 2000) {
    nivel = "Bronze";
}

else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
}

else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
}

else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
}

else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
}

else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
}

else {
    nivel = "Radiante";
}

/* Passo 3: utilizando a interpolação de strings para a Saída final, gerando uma forma mais legível e fácil de escrever. */

console.log(`O Herói de nome ${nome} está no nível ${nivel}.`);
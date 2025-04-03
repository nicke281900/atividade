// 1. Exiba a mensagem"ola mundo"! no console.
console.log("ola,mundo!");

// 2. Cria uma variavel com o seu nome e exiba no console.
let nome = "NIcole s";
console.log(nome)

// 3. Some dois numeros e exiba no console.
let num1 = 17;
let num2 = 1;
console.log(num1 + num2);

// 4. Subtraia dois numeros e exiba o resultado.
console.log(num1 - num2);

// 5. Multiplique dois numeros e exiba o resultado.
console.log(num1 * num2);

// 6. Divida dois numeros e exiba o resultado.
console.log(num1 / num2);

// 7. Descubra o resto da divisao de um numero para o outro.
console.log(num1 % num2);

// 8. Crie uma variável booleana (true ou false) exiba seu valor.
let éMaiora = true;
console.log(éMaior);

// 9. Verifique se um número é maior que outro eexiba o resultado.
console.log(num1 > num2);

// 10. Junte duas palavras (strings) e exiba o resultado.
let palavra1 ="Nicole";
let palavra2 = "s";
console.log(palavra1 + palavra2);

// 11. Converta uma string que representa um númeropara um tipo numérico.
let stringsNumero = "23"
let numeroConvertido = Number(stringsNumero);
console.log(numeroConvertido);

// 12. Verifique se um número é par ou ímpar.
let numero = 7;
if (numero % 2 === 0) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}

// 13. Crie um array com três frutas e exiba a segunda fruta.
let frutas = ["goiaba", "Banana", "uva"];
console.log(frutas[1]); // Segunda fruta

// 14. Adicione um novo número ao final de um array e exiba o array atualizado.
let numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros);

// 15. Remova o último item de um array e exiba o array atualizado.
numeros.pop();
console.log(numeros);

// 16. Crie um código que verifique se uma pessoa é maior ou menor de idade.
let idade = 17;
if (idade >= 25) {
  console.log("A pessoa é maior de idade.");
} else {
  console.log("A pessoa é menor de idade.");
}

// 17. Faça um loop que exiba os números de 1 a 5.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 18. Crie uma função que retorna a mensagem "Ola mundo!" e a chame.
function saudacao() {
  return "ola mundo!";
}
console.log(saudacao());

// 19. Crie um objeto com nome e idade e exiba o nome da pessoa.
let pessoa = {
  nome: "Nicole",
  idade: 25
};
console.log(pessoa.nome);
var nome = "Michelly";
var idade = 26;
var idade2 = 55;
var frase = "Japão é o melhor time do mundo";
var lista = ["maçã ", " pera ", " laranja "];
var fruta = {nome: "maçã", cor: "vermelha"};
var frutas = [{nome: "maçã", cor: "vermelha", nome: "uva", cor: "roxa"}];

//alert (nome + " tem " + idade + " anos");
alert (idade + idade2);
console.log (nome); //o comando console permite ver o código executando no console do navegador.
console.log (idade + idade2);
console.log (frase.replace("Japão","Brasil")); /*.replace substitui uma palavra por outra.
												.toLowerCase deixa as palavras em minúsculo e
												.toUpperCase deixa as palavras em maiúsculo.*/

//lista.push(" uva"); - adiciona uma palavra ao final da lista.
//lista.pop(); - retira a última palavra da lista.
alert (lista);
console.log (lista.length); //retorna o tamanho da lista.
console.log (lista.reverse()); //imprime a lista no console, de trás pra frente.
console.log (lista.toString());
console.log (lista.join(" - ")); //substitui a vírgula por qualquer outro elemento.

console.log (fruta); //imprime todos os elementos do dicionário.
console.log (fruta.nome); //imprime somente o que está dentro de "nome".
alert (fruta.cor); //abre um pop-up, que imprime somente o que está dentro de "cor".

console.log (frutas); //imprime todos os elementos.
alert (frutas[1].nome); //imprime o "nome" que está armazenado na posição 1.
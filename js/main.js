var nome = "Michelly";
var idade = 26;
var idade2 = 55;
var frase = "Japão é o melhor time do mundo";
var lista = ["maçã ", " pera ", " laranja "];
var fruta = {nome: "maçã", cor: "vermelha"};
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
var d = new Date();

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

alert (d.getDay()); //imprime o dia atual
alert (d.getHours()); //imprime as horas
alert (d.getMinutes()); //imprime os minutos


function soma (n1, n2){ //função que retorna o resultado da soma de 2 números.
	return n1 + n2;
}

function setReplace(frase, nome novo_nome){ //função que retorna a frase escrita, com as alterações realizadas.
	return frase.replace (nome, novo_nome);
}

alert (soma (5, 10));
alert (setReplace ("Vai Japão", "Japão", "Brasil"));

function clicou () {
	document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>"; /*quando o botão é pressionado, exibe
					a frase na página em negrito.*/
	//console.log(documentElementById("agradecimento")); - seleciona todo o campo do botão.
	//alert (Obrigada por clicar); - exibe a frase em um pop-up.
}

function redirecionar() {
	//window.open("https://globallabs.academy/"); - abre uma nova guia para exibir a página que foi redirecionado.
	window.location.href = "https://globallabs.academy/"; //abre a página redirecionada na mesma guia.
}

function trocar(elemento){ //ao passar o mouse em cima da frase "Passe o Mouse Aqui", ela mudará para a frase da função.
	elemento.innerHTML = "Obrigada por passar o mouse";
}

function voltar(elemento){ //ao tirar o mouse de cima da frase "Obrigada por passar o mouse", ela volta ao seu estado original.
	elemento.innerHTML = "Passe o Mouse Aqui";
}

function load(){ //exibe um pop-up informando que a página foi carregada.
	alert ("Página Carregada");
}

function change(elemento){ //exibe no console a opção escolhida na seleção.
	console.log(elemento.value);
}
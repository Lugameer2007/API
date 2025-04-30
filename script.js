const headers = new Headers({
    "content-type":"application/json"
})
//Codificação da requisição GET
var requestOptions= {
    method: 'Get',//metodo de requisição
    headers: headers//inclui os cabaçalhos definidos anteriormente
}

//Realiza a requisição GET para a API de cachorros

fetch("https://www.thedogapi.com/")
.then(response => response.json())//Converte a resposta para Json
.then(result =>{
    //Exibe a resposta no console
    console.log(result);
    //Exibe o primeiro cachorro da API
    const dogData = result=[0];
    //Mostra a imagem do cachorro na tela
    document.getElementById('Dog-image').src="DogData.url";
    //Preenche o formulário com o nome e raça do cachorro
    //Caso o nome não exista, aparece "Cachorro Aleatório"
    document.getElementById('Nome do cachorro').value = dogData.name = "Cachorro Aleatório";
    //Se a raça não for encontrada, vai exibir "Desconhecida"
    document.getElementById('Dog-breed').Value = dogData.reeds?dogData.breends[0].name="Desconhecido"
})
.catch(error => console.log('error', error))//Encontra erros e os mostra no console

document.getElementById('update-form').addEventListener('submit', function(event){ 
Event.preventDefault(); //Impede o comportamento padrão de envio do formulario

//Obtem as informações ou valores inseridos pelo usúario nos campos do formulário
const dogName = document.getElementById('dog-name').Value;
const dogBreed = document.getElementById('dog-breed').Value;

//Exibe as informções atualizadas no console
console.log("Informações sobre o cachorro atualizadas", {Name: dogName, breed: dogBreed});

//Mostra um alerta com as informções atualizadas
alert("Informções do cachorro atualizadas" + "dogName" + "Raça" + "dogBreed");
})
//Adiciona eventos para o botão de "Excluir"
document.getElementById('Delete-button').addEventListener('click', function(){
//Simula a exclusão dos dados do cachorro
alert("As informções do cachorro foram excluidas!!");

//Limpa a imagem e os campos dos formularios 
document.getElementById('dog-image').src="https://cdn2.thedogapi.com/images/ry1kWe5VQ_1280.jpg";
document.getElementById('dog-name').Value="";
document.getElementById('dog-breed').Value="";
})
//Adiciona eventos para o botão de "Editar"
document.getElementById('edit-button').addEventListener('click', function(){

//Habilita os campos do formulario para poder ser editado
document.getElementById('dog-name').disabled = false;
document.getElementById('dog-breed').disabled = false
})

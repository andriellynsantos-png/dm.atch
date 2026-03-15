function criarConta(){

let nome=document.getElementById("nome").value
let email=document.getElementById("email").value
let senha=document.getElementById("senha").value

let usuario={nome,email,senha}

localStorage.setItem("usuario",JSON.stringify(usuario))

document.getElementById("msg").innerText="Conta criada!"

}

function login(){

let email=document.getElementById("email").value
let senha=document.getElementById("senha").value

let usuario=JSON.parse(localStorage.getItem("usuario"))

if(email==usuario.email && senha==usuario.senha){

window.location.href="perfis.html"

}else{

document.getElementById("msg").innerText="Login incorreto"

}

}

/* PERFIS EDITÁVEIS */

let perfis=[

{
nome:"bruce wayne, 40",
bio:"Gosto de salvar gotham e adoro a noite",
foto:"https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg"
},

{
nome:"Maria, 18",
bio:"Amo viajar e ver séries",
foto:"https://i.pravatar.cc/300?img=20"
},

{
nome:"tom, 21",
bio:"Fã de futebol e música",
foto:"https://upload.wikimedia.org/wikipedia/commons/4/4c/Tom_Cruise_by_Gage_Skidmore.jpg"
}

]

let indice=0

function carregarPerfil(){

if(!document.getElementById("nomePerfil")) return

document.getElementById("nomePerfil").innerText=perfis[indice].nome
document.getElementById("bio").innerText=perfis[indice].bio
document.getElementById("foto").src=perfis[indice].foto

}

carregarPerfil()

function match(){

localStorage.setItem("chatPessoa",perfis[indice].nome)

window.location.href="chat.html"

}

function passar(){

indice++

if(indice>=perfis.length){

alert("Acabaram os perfis")

return

}

carregarPerfil()

}

/* CHAT */

if(document.getElementById("nomeChat")){

let pessoa=localStorage.getItem("chatPessoa")

document.getElementById("nomeChat").innerText=pessoa

}

function enviar(){

let input = document.getElementById("mensagem")
let msg = input.value

if(msg === "") return

let chat = document.getElementById("chat")

chat.innerHTML += "<p>Você: " + msg + "</p>"

input.value = ""

}
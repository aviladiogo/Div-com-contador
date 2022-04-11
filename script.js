console.log('hello!')
vezes = 0
vezes2 = 0
function executaAcao(id){
  var resultado = document.getElementById(id)
  if(id=="name"){
    vezes += 1
    resultado.innerHTML = vezes
  }else{
    vezes2 += 1
    resultado.innerHTML = vezes2
  }
}

function zerar (id){
  var resultado = document.getElementById(id)
  if(id=="name"){
    vezes = -1
    resultado.innerHTML = vezes
  }else{
    vezes2 = -1
    resultado.innerHTML = vezes2
  }
}
 
{/* <div id="box" onclick=executaAcao("name") >
  <h1>Clique aqui<h1><br>
  <span id ="name">----</span><br><br>
  <button id="botao" onclick=zerar("name") >Zerar</button> <br>
</div>  */}

function criar(){
  var p=document.createElement('p')
  const Nome = document.querySelector('#Name').value
  if(Nome == Null){
    alert("Ta null primo")
  }else{
    p.textContent=Nome
    p.style.color='white'
    p.style.backgroundColor='blue'
    p.style.padding='15px'
    p.style.margin='15px'
    
    
    var cx=document.querySelector('div')
    cx.appendChild(p)
  }
 
}

function adcElemento(){
  const Nome = document.querySelector('#Name');
  const btn = document.createElement("button");
  btn.innerHTML = "Zerar";
  const divNova = document.createElement("div");
  const conteudoNovo = document.createTextNode("Clique Aqui");
  divNova.appendChild(conteudoNovo);
  divNova.appendChild(btn);

  var divAtual = document.getElementById("div1");
  document.body.insertBefore(divNova, divAtual);
}
// document.getElementById('botao').onclick = zerar;
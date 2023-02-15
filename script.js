
/*-----laços que geram a prateleira 1-------*/
//---gera coluna do chao ---------
contP1chao = 38;
for(i = 0; i<38;i++){
let posicao = document.createElement("div");
let p1chao = document.getElementById('p1chao');
p1chao.appendChild(posicao);

if(contP1chao < 10){
posicao.textContent = "P1-A-"+'0'+contP1chao;
}else{
posicao.textContent = "P1-A-"+contP1chao;
}

posicao.setAttribute('class','posicao');

contP1chao--;
}




//---gera coluna do meio---------
contP1meio =38;
for(i = 0; i<38;i++){
let posicao = document.createElement("div");
let p1meio = document.getElementById('p1meio');
p1meio.appendChild(posicao);

if(contP1meio < 10){
posicao.textContent = "P1-B-"+'0'+contP1meio;
}else{
posicao.textContent = "P1-B-"+contP1meio;
}

posicao.setAttribute('class','posicao');

contP1meio--;

}




//---gera coluna do topo ---------
contP1topo = 38;
for(i = 0; i<38;i++){
let posicao = document.createElement("div");
let p1top = document.getElementById('p1topo');
p1topo.appendChild(posicao);

if(contP1topo < 10){
posicao.textContent = "P1-C-"+'0'+contP1topo;
}else{
posicao.textContent = "P1-C-"+contP1topo;
}


posicao.setAttribute('class','posicao');

contP1topo--;
}
/*---------------fim prateleira 1------------------*/




/*-----laços que geram a prateleira 2-------*/
//---gera coluna do chao ---------
contP2chao = 38;
for(i = 0; i<38;i++){
let posicao = document.createElement("div");
let p2chao = document.getElementById('p2chao');
p2chao.appendChild(posicao);

if(contP2chao < 10){
posicao.textContent = "P2-A-"+'0'+contP2chao;
}else{
posicao.textContent = "P2-A-"+contP2chao;
}

posicao.setAttribute('class','posicao');

contP2chao--;
}




//---gera coluna do meio---------
contP2meio =38;
for(i = 0; i<38;i++){
let posicao = document.createElement("div");
let p2meio = document.getElementById('p2meio');
p2meio.appendChild(posicao);

if(contP2meio < 10){
posicao.textContent = "P2-B-"+'0'+contP2meio;
}else{
posicao.textContent = "P2-B-"+contP2meio;
}

posicao.setAttribute('class','posicao');

contP2meio--;

}




//---gera coluna do topo ---------
contP2topo = 38;
for(i = 0; i<38;i++){
let posicao = document.createElement("div");
let p2topo = document.getElementById('p2topo');
p2topo.appendChild(posicao);

if(contP2topo < 10){
posicao.textContent = "P2-C-"+'0'+contP2topo;
}else{
posicao.textContent = "P2-C-"+contP2topo;
}


posicao.setAttribute('class','posicao');

contP2topo--;
}
/*---------------fim prateleira 2------------------*/









/*-----laços que geram a prateleira 3-------*/
//---gera coluna do chao ---------
contP3chao = 38;
for(i = 0; i<38;i++){
let posicao = document.createElement("div");
let p3chao = document.getElementById('p3chao');
p3chao.appendChild(posicao);

if(contP3chao < 10){
posicao.textContent = "P3-A-"+'0'+contP3chao;
}else{
posicao.textContent = "P3-A-"+contP3chao;
}

posicao.setAttribute('class','posicao');

contP3chao--;
}




//---gera coluna do meio---------
contP3meio =38;
for(i = 0; i<38;i++){
let posicao = document.createElement("div");
let p3meio = document.getElementById('p3meio');
p3meio.appendChild(posicao);

if(contP3meio < 10){
posicao.textContent = "P3-B-"+'0'+contP3meio;
}else{
posicao.textContent = "P3-B-"+contP3meio;
}

posicao.setAttribute('class','posicao');

contP3meio--;

}




//---gera coluna do topo ---------
contP3topo = 38;
for(i = 0; i<38;i++){
let posicao = document.createElement("div");
let p3topo = document.getElementById('p3topo');
p3topo.appendChild(posicao);

if(contP3topo < 10){
posicao.textContent = "P3-C-"+'0'+contP3topo;
}else{
posicao.textContent = "P3-C-"+contP3topo;
}


posicao.setAttribute('class','posicao');

contP3topo--;
}
/*---------------fim prateleira 3------------------*/








/*-----laços que geram a prateleira 4-------*/
//---gera coluna do chao ---------
contP4chao = 38;
for(i = 0; i<38;i++){
let posicao = document.createElement("div");
let p4chao = document.getElementById('p4chao');
p4chao.appendChild(posicao);

if(contP4chao < 10){
posicao.textContent = "P4-A-"+'0'+contP4chao;
}else{
posicao.textContent = "P4-A-"+contP4chao;
}

posicao.setAttribute('class','posicao');

contP4chao--;
}




//---gera coluna do meio---------
contP4meio =38;
for(i = 0; i<38;i++){
let posicao = document.createElement("div");
let p4meio = document.getElementById('p4meio');
p4meio.appendChild(posicao);

if(contP4meio < 10){
posicao.textContent = "P4-B-"+'0'+contP4meio;
}else{
posicao.textContent = "P4-B-"+contP4meio;
}

posicao.setAttribute('class','posicao');

contP4meio--;

}




//---gera coluna do topo ---------
contP4topo = 38;
for(i = 0; i<38;i++){
let posicao = document.createElement("div");
let p4topo = document.getElementById('p4topo');
p4topo.appendChild(posicao);

if(contP4topo < 10){
posicao.textContent = "P4-C-"+'0'+contP4topo;
}else{
posicao.textContent = "P4-C-"+contP4topo;
}


posicao.setAttribute('class','posicao');

contP4topo--;
}
/*---------------fim prateleira 4------------------*/




/*----funçao que localiza os endereços*/ 

function localizar() {
  const input = document.getElementById('input');
  const searchTerms = input.value.split(' '); // divide o valor do campo de entrada em várias palavras
  const divs = document.querySelectorAll('.posicao');
  divs.forEach(div => {
    const text = div.textContent;
    let shouldHighlight = false;
    for (let term of searchTerms) {
      if (text.includes(term)) {
        shouldHighlight = true;
        break;
      }
    }
    if (shouldHighlight) {
      div.classList.add('highlight');
    } else {
      div.classList.remove('highlight');
    }
  });
}







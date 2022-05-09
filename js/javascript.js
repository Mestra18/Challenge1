const boxText = document.querySelector(".box_text");
const textareaText = document.querySelector(".textarea__text");
const $content = document.getElementById('textareaCopy');
const $btn = document.getElementById('btnCopiar');
const $textareaTitle = document.getElementById('textareaH3');

/* Función para encriptar el texto */
function btnencriptar(){
  const textoEncriptado = encriptar(boxText.value);
  textareaText.value = textoEncriptado;
  document.querySelector('.textarea').style = 'display:block';
  document.querySelector('.texto_encriptado').style = 'display:none';
  document.querySelector('.doll').style = 'display:none';
  document.querySelector('.candado1').style = 'display:block';
  document.querySelector('.candado2').style = 'display:none';
  document.querySelector('.encriptado').style = 'display:block';
  document.querySelector('.desencriptado').style = 'display:none';
} 

function encriptar(textoParaEncriptar){
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
  textoParaEncriptar = textoParaEncriptar.toLowerCase();
  for(let i = 0; i < matrizCodigo.length; i++){
    if(textoParaEncriptar.includes(matrizCodigo[i][0])){
      textoParaEncriptar = textoParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
    }
    boxText.value = ''
  }
  return textoParaEncriptar;
}

/* Función para desencriptar el texto */
function btndesencriptar(){
  const textoDesencriptado = desencriptar(boxText.value);
  textareaText.value = textoDesencriptado;
  document.querySelector('.candado1').style = 'display:none';
  document.querySelector('.candado2').style = 'display:block';
  document.querySelector('.encriptado').style = 'display:none';
  document.querySelector('.desencriptado').style = 'display:block';
} 

function desencriptar(textoParaDesencriptar){
  let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
  textoParaDesencriptar = textoParaDesencriptar.toLowerCase();
  for(let i = 0; i < matrizCodigo.length; i++){
    if(textoParaDesencriptar.includes(matrizCodigo[i][0])){
      textoParaDesencriptar = textoParaDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
    }
    boxText.value = ''
  }
  return textoParaDesencriptar;
}

/* Copiar texto encriptado */
$btn.addEventListener('click', e => {
  $content.select();
  document.execCommand('copy');
  const textoEncriptado = textareaText.value;
  boxText.value = textoEncriptado;
  document.querySelector('.mensaje__copy').classList.add('show');
  
  setTimeout(() =>{
    document.querySelector('.mensaje__copy').classList.remove('show');
  }, 1300);
});





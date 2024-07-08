const textArea = document.getElementById("text");
const resultado = document.getElementById("resultado");
const copiar = document.getElementById("bt_copiar");


function btnEncriptar(){
    if(String(textArea.value).length == 0) {
        return
      }

    let textoParaEncriptar = String(textArea.value).toLowerCase();


    const textoEncriptado = textoParaEncriptar.replace(
        /e|i|a|o|u/g,
        function (matched) {
          if (matched === "e") return "enter";
          if (matched === "i") return "imes";
          if (matched === "a") return "ai";
          if (matched === "o") return "ober";
          if (matched === "u") return "ufat";   
        }
      );
    
    
    printMessange(textoEncriptado);
    
}




function btnDecriptar(){
    if(String(textArea.value).length == 0) {
        return
      }
    
      let textoParaDesencriptar = String(textArea.value).toLowerCase();

      const textoDesencriptado = textoParaDesencriptar.replace(
        /enter|imes|ai|ober|ufat/g,
        function(matched){
            if (matched === "enter") return "e";
            if (matched === "imes") return "i";
            if (matched === "ai") return "a";
            if (matched === "ober") return "o";
            if (matched === "ufat") return "u";
        }
      );
      printMessange(textoDesencriptado);
      
      
}

function printMessange(text){

    let model = document.getElementById("resultado");
    if (model) {
        model.innerHTML = ''; // Limpa o conteúdo atual

        let textResponse = document.createElement('p');
        textResponse.id = 'response';
        textResponse.textContent = text || 'Novo conteúdo para substituir';

        model.appendChild(textResponse);
    } 
    
}


copiar.addEventListener('click', () => {
    let resp = document.getElementById('response');
    if (resp) {
    
        const range = document.createRange();
        range.selectNodeContents(resp);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        try {
            document.execCommand('copy');
        } catch (err) {
            console.log(err);
        }
        

        selection.removeAllRanges();
    }
});
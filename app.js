const ingreseTexto=document.getElementById("ingreseTexto");
const botonEncriptar=document.getElementById("botonEncriptar");
const botonDesencriptar=document.getElementById("botonDesencriptar");
const botonCopiar=document.getElementById("botonCopiar");
const mensajeFinal=document.getElementById("mensajeFinal")
const muñeco=document.getElementById("muñeco");
const rightInfo=document.getElementById("rightInfo");
const right=document.getElementById("right");

//e -enter
//o - ober
//i -imes
//a -ai
// u -ufat

let reemplazar=[
    ["e" ,"enter"],
    ["o" , "ober"],
    ["i" ,"imes"],
    ["a" ,"ai"],
    ["u" ,"ufat",]
]

botonEncriptar.addEventListener("click", () => {
    const texto=ingreseTexto.value.toLowerCase();

    function encriptar(newText){
        for(let i=0 ;i < reemplazar.length; i++){
            if(newText.includes(reemplazar[i][0])){newText = newText.replaceAll(reemplazar[i][0],reemplazar[i][1]);     
                };
        };
        return newText;
    
    };
    const textoEncriptado=encriptar(texto);
    
    mensajeFinal.innerHTML=textoEncriptado;
    
    muñeco.classList.add("oculto"); 
    
    ingreseTexto.value=""
    rightInfo.style.display="none";
    botonCopiar.style.display="block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
    
});

botonDesencriptar.addEventListener("click", () => {
    const texto=ingreseTexto.value.toLowerCase();
    function desencriptar(newText){
        for(let i =0; i < reemplazar.length; i++){
            if(newText.includes(reemplazar[i][1])){
                newText = newText.replaceAll(reemplazar[i][1],reemplazar[i][0]);
            };
        };
        return newText;
    }  
    const textoDesencriptado= desencriptar(texto);

    mensajeFinal.innerHTML=textoDesencriptado;
    muñeco.classList.add("oculto"); 
    
    ingreseTexto.value=""
    rightInfo.style.display="none";
    botonCopiar.style.display="block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
})

botonCopiar.addEventListener("click" ,() => {
    let texto=mensajeFinal;
   texto.select();
   document.execCommand("copy")
   alert("Texto copiado");

   mensajeFinal.innerHTML="";
   muñeco.classList.remove("oculto"); 
   botonCopiar.style.display="block";
   right.classList.remove("ajustar");
   mensajeFinal.classList.remove("ajustar");

})
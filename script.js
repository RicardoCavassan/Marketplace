window.onload = function() {
    const imagens = document.querySelectorAll('.imagem-carrossel');
    let imagemAtiva = 0;
    imagens[imagemAtiva].style.display='block';

    function mudaImagem(){
        imagens[imagemAtiva].style.display='none';
        if (imagemAtiva<imagens.length-1)
            imagens[++imagemAtiva].style.display='block';
        else{
            imagemAtiva=0;
            imagens[imagemAtiva].style.display='block';
        }
        console.log(imagemAtiva);
    }

    const intervalo = setInterval(mudaImagem, 3000);
}
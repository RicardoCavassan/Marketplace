const imagens = document.querySelectorAll('.imagem-carrossel');
const itens = document.querySelectorAll('.item-carrossel');
let imagemAtiva = 0;
imagens[imagemAtiva].style.display='block';
itens[imagemAtiva].id='active';

function mudaImagem(item){
    if (typeof item !== 'undefined'){
        imagens[imagemAtiva].style.display='none';
        itens[imagemAtiva].id='';
        imagemAtiva=item;
        imagens[imagemAtiva].style.display='block';
        itens[imagemAtiva].id='active';
    }
    else {
        imagens[imagemAtiva].style.display='none';
        if (imagemAtiva<imagens.length-1){
            itens[imagemAtiva].id='';
            imagens[++imagemAtiva].style.display='block';
            itens[imagemAtiva].id='active';
        }
        else{
            itens[imagemAtiva].id='';
            imagemAtiva=0;
            imagens[imagemAtiva].style.display='block';
            itens[imagemAtiva].id='active';
        }
    }
}

const intervalo = setInterval(mudaImagem, 5000);

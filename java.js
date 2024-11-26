// script para abrir a imagem em uma nova janela

function abrirImagem(img) {
    var src = img.src;
    var janela = window.open("", "_blank");
    janela.document.write("<img src='" + src + "' style='width:50%;'>");
}
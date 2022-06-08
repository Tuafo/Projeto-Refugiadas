function marcar(e) {
    // verifica se a classe azul (estilo css que conter a imagem azul) esta no elemento
    if (e.className == "img1") {
      e.className = "img2";
    } else {
      e.className = "img1";
    }
  }
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {

    const nav = document.getElementById('nav');

    /* esse comando faz com que seja adiconada a classe 'active' no item nav quando clicar no botão menu */
    nav.classList.toggle('active'); 

}

btnMobile.addEventListener('click', toggleMenu);

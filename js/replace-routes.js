// setTimeout(function(){
//     window.open('./home.html', '_self')
// }, 3000)

document.querySelector('.pacote2').addEventListener('click', () => {
    let rotas = document.querySelectorAll('.js-rota');
    let oldPrice = document.querySelector('.old-price-pacote1');
    let newPrice = document.querySelector('.new-price-pacote1')
    rotas = Array.from(rotas);
    rotas[0].textContent = 'Cachoeira do Arari';
    rotas[1].textContent = 'Salvaterra';
    rotas[2].textContent = 'Soure';
    rotas[3].textContent = 'Ponta de Pedras';
    oldPrice.textContent = 'De R$2.569,00';
    newPrice.textContent = 'Por R$2.200,00'
}) 

document.querySelector('.pacote1').addEventListener('click', () => {
    let rotas = document.querySelectorAll('.js-rota');
    let oldPrice = document.querySelector('.old-price-pacote1');
    let newPrice = document.querySelector('.new-price-pacote1')
    rotas = Array.from(rotas);
    rotas[0].textContent = 'Combú';
    rotas[1].textContent = 'Sirituba';
    rotas[2].textContent = 'Cotijuba';
    rotas[3].textContent = 'Mosqueiro';
    oldPrice.textContent = 'De R$1.857,99';
    newPrice.textContent = 'Por R$1.530,00'
}) 
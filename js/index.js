// setTimeout(function(){
//     window.open('./home.html', '_self')
// }, 3000)

document.querySelector('.pacote2').addEventListener('click', () => {
    let rotas = document.querySelectorAll('.js-rota');
    let oldPrice = document.querySelector('.old-price-pack');
    let newPrice = document.querySelector('.new-price-pack')
    let titleCard = document.querySelector('.text-pacote');
    rotas = Array.from(rotas);
    rotas[0].textContent = 'Cachoeira do Arari';
    rotas[1].textContent = 'Salvaterra';
    rotas[2].textContent = 'Soure';
    rotas[3].textContent = 'Ponta de Pedras';
    oldPrice.textContent = 'De R$2.569,00';
    newPrice.textContent = 'Por R$2.200,00';
    titleCard.textContent = 'Pacote 2';
})

document.querySelector('.pacote1').addEventListener('click', () => {
    let rotas = document.querySelectorAll('.js-rota');
    let oldPrice = document.querySelector('.old-price-pack');
    let newPrice = document.querySelector('.new-price-pack');
    let titleCard = document.querySelector('.text-pacote');
    rotas = Array.from(rotas);
    rotas[0].textContent = 'Combú';
    rotas[1].textContent = 'Sirituba';
    rotas[2].textContent = 'Cotijuba';
    rotas[3].textContent = 'Mosqueiro';
    oldPrice.textContent = 'De R$1.857,99';
    newPrice.textContent = 'Por R$1.530,00';
    titleCard.textContent = 'Pacote 1';
})

setInterval(function () {
    let numberOfTickets = document.querySelector('#numberOfTickets');
    let numRand = Math.floor(Math.random() * (100 + 1) * 1)
    if (numRand > numberOfTickets + 40) {
        numRand = numRand - 40;
    }
    numberOfTickets.textContent = numRand;
}, 8000)

document.querySelector('.plan-1').addEventListener('click', () => {
    document.querySelector('#valueOfPlan').textContent = 'R$260,00';
})

document.querySelector('.plan-2').addEventListener('click', () => {
    document.querySelector('#valueOfPlan').textContent = 'R$130,00';
})

document.querySelector('.add-pack').addEventListener('click', function() {
    let newPrice = document.querySelector('.new-price-pack').textContent;
    newPrice = newPrice.split('');
    newPrice = newPrice.filter(function(el, key){
        let boolean = key > 5;
        return boolean;
    })
    document.querySelector('#valueOfPack').textContent = newPrice.join('');
})
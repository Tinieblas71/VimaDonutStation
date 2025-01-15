let searchForm = document.querySelector('.search-form-container');

document.querySelector('#menu-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');    
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

/*let cart = document.querySelector('.shopping-cart-container');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}*/

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');    
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelector('.home').onmousemove = (e) =>{

    let x = (window.innerWidth - e.pageX * 2) / 90;
    let y = (window.innerHeight - e.pageY * 2) / 90;

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(${y}px) translateY(${x}px)`;
}

document.querySelector('.home').onmouseleave = () =>{

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(0px) translateY(0px)`;
}   

function changeImg(anything){
    document.querySelector('.home-img').src = anything;
}


const send = document.querySelector('#send-order');
send.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const phone = document.querySelector('#order').value;
    const order = document.querySelector('#order').value;
    const howMuch = document.querySelector('#how-much').value;
    const details = document.querySelector('#details').value;
    const date = document.querySelector('#date').value;
    const address = document.querySelector('#address').value;

    const link = `https://api.whatsapp.com/send?phone=5215612807356&text=Confirmaci%C3%B3n%20de%20Pedido%3A%20Vima%20Donut%20Station%0ANombre%3A%20${name}%0ANumero%3A%20${phone}%0AOrden%3A%20${order}%20(${howMuch})%0AFecha%3A%20${date}%0ADirecci%C3%B3n%3A%20${address}%0ADetalles%3A%20${details}%0AEn%20unos%20momentos%20atenderemos%20su%20pedido.`;
    window.open(link);

})
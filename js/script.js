document.getElementById("main-action").onclick = function() {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}

const buttons = document.getElementsByClassName("car-btn")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById("form-action").onclick = function() {
    if (document.getElementById("name").value === "") {
        alert("Заполните поле имя!");
    } else if (document.getElementById("phone").value === "") {
        alert("Заполните поле телефон!");
    } else if (document.getElementById("car").value === "") {
        alert("Заполните поле автомобиль!");
    } else {
        alert("Спасибо за заявку, мы свяжемся с вами совсем скоро!")
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.form-img');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".header-content");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
    })
});
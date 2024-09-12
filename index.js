const precio = 400000;
let cantidad = 0;
let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
let numElementos = document.querySelector(".cantidad");
let suma = document.querySelector(".sum");
let resta = document.querySelector(".res");
let valorTotal = document.querySelector(".valor-total");


suma.addEventListener('click', () => {
    cantidad += 1;

    numElementos.textContent = cantidad;

    valorTotal.innerHTML = (cantidad*precio);

    if (cantidad > 0) {
        resta.disabled = false;
    }
});

resta.addEventListener('click', () => {
    if (cantidad > 0) {
        cantidad -= 1;
        numElementos.textContent = cantidad;

        valorTotal.innerHTML = (cantidad*precio);
    }

    if (cantidad === 0) {
        resta.disabled = true;
        /* alert("No puedes tener menos de 0 unidades") */;
    }
});





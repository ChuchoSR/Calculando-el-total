precio = 400000;
cantidad = 0;
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
numElementos = document.querySelector(".cantidad");
suma = document.querySelector(".sum");
resta = document.querySelector(".res");
valorTotal = document.querySelector(".valor-total");


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





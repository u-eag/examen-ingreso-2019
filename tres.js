function mostrar()
{
    var precio;
    var porcentajeDescuento;

    var precioDescuento;
    var precioFinal;

    var mensaje;

    // pido los datos:

    precio = parseFloat(prompt("Ingrese el precio"));

    porcentajeDescuento = prompt("Ingrese el porcentaje de descuento");

    // proceso los datos:

    precioDescuento = precio * porcentajeDescuento / 100;

    precioFinal = precio - precioDescuento;

    // muestro la información:

    document.getElementById("elPrecioFinal").value = precioFinal;
}

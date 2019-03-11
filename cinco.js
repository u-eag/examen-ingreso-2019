function mostrar()
{
    // variables para solicitar los datos:
    var continente;
    var estadia;
    var formaPago;

    // variables para procesar los datos:
    var precio = 100;
    var precioDescuento;
    var precioEstadia;

    // variables para mostrar la info:
    var mensaje;

    // solicito los datos:

    continente = document.getElementById("Marca").value;

    estadia = parseInt(prompt("Ingrese la cantidad de días"));

    formaPago = prompt("Ingrese la forma de pago: debito, mercadoPago, efectivo u otros medios");

    // proceso los datos:

    switch(continente) {

        case "América":
        // tiene un 50% de descuento (precio * 0.5)
        // si además paga por débito se le agrega un 10% más de descuento (precio * 0.4)
            if (formaPago == "debito") {
                precioDescuento = precio * 0.4;
            } else {
                precioDescuento = precio * 0.5;
            }
            break;

        case "África":
        // tiene un 60& de descuento (precio * 0.4)
        // si además paga con mercadoPago o efectivo se le agrega un 15% más (precio * 0.25)
            if (formaPago == "mercadoPago" || formaPago == "efectivo") {
                precioDescuento = precio * 0.25;
            } else {
                precioDescuento = precio * 0.4;
            }
            break;

        case "Europa":
        // tiene un 20% de descuento (precio * 0.8)
        // si además paga con débito se le agrega un 15% más (precio * 0.65)
        // con mercadoPago un 10% más (precio * 0.7)
        // con cualquier otro medio se le agrega un 5% más de descuento (precio * 0.75)
            if (formaPago == "debito") {
                precioDescuento = precio * 0.65;

            } else if (formaPago == "mercadoPago") {
                precioDescuento = precio * 0.7;

            } else {
                precioDescuento = precio * 0.75;
            }
            break;
        
        default:
        // cualquier otro continente tiene un recargo del 20% (precio * 1.2)
            precioDescuento = precio * 1.2;
    }

    precioEstadia = estadia * precioDescuento;

    // muestro la info:

    mensaje = "Usted viajará " + estadia + " días a " + continente + " por $" + precioEstadia + " abonando con " + formaPago;

    alert(mensaje);

}

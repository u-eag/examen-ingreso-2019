
function mostrar()
{
    // un triángulo equilátero tiene los tres lados iguales
    // solo es necesario pedir el dalo de UN lado por prompt

    var lado;
    var perimetro;
    var mensaje;

    // pido el dato por prompt:

    lado = parseInt(prompt("Ingrese el valor del lado en centímetros"));

    // proceso el dato: el perimetro es la suma de los lados

    perimetro = lado * 3;

    // muestro la información

    mensaje = "Un triángulo equilátero cuyo lado vale " + lado + " cm tiene un perímetro de " + perimetro + " cm."

    alert (mensaje);
}

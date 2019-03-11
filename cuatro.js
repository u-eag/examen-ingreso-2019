function mostrar()
{
    var num1;
    var num2;

    var resta;
    var suma;

    var mensaje;

    // pido los datos:

    num1 = parseInt(prompt("Ingrese el primer número"));

    num2 = parseInt(prompt("Ingrese el segundo número"));

    // proceso los datos:

    if (num1 == num2) {
        // para concatenar 2 números los sumo con un string
        mensaje = "Los números ingresados son: " + num1 + num2;

    } else if (num1 > num2) {
        resta = num1 - num2;
        mensaje = "La resta de los números ingresados es " + resta;
       
        if (resta > 10) {
            mensaje = mensaje + " y superó el 10"
        }

    } else {
        suma = num1 + num2;
        mensaje = "La suma es " + suma;
    }

    // muestro la información:

    alert(mensaje);








}

function mostrar()
{
    var letra;
    var numero;

    var seguir;

    // variables para los puntos a) y b):
    var contadorPar = 0;
    var contadorImpar = 0;

    // variable para el punto c):
    var contadorCero = 0;

    // variables para los puntos d) y e):
    var acumuladorPositivo = 0;
    var contadorPositivo = 0;
    var promedioPositivo;
    var acumuladorNegativo = 0;

    // variables para el punto f):
    var numeroMaximo;
    var letraMaximo;
    var numeroMinimo;
    var letraMinimo;
    var flag = 0;

    // como los datos deben ingresarse al menos una vez, uso "do while":
    do {
        letra = prompt("Ingrese una letra");

        numero = parseInt(prompt("Ingrese un número entre -100 y 100"));

        while (!(numero <= 100 && numero >= -100)) {
            numero = parseInt(prompt("Número inválido. Inténtelo nuevamente ingresando un número entre -100 y 100."));
        }

        // punto a) y b):
        if (numero % 2 == 0) {
            contadorPar++;
        } else {
            contadorImpar++;
        }

        // punto c):
        if (numero == 0) {
            contadorCero++;
        }

        // pundos d) y e):
        if (numero > 0) {
            acumuladorPositivo += numero;
            contadorPositivo++;
            promedioPositivo = acumuladorPositivo / contadorPositivo;
        } else {
            acumuladorNegativo -= numero;
        }

        // punto f):
        if (numero > numeroMaximo || flag == 0) {
            numeroMaximo = numero;
            letraMaximo = letra;
        }
        if (numero < numeroMinimo || flag == 0) {
            numeroMinimo = numero;
            letraMinimo = letra;
            flag = 1;
        }

        seguir = confirm("¿Desea continuar ingresando datos?");
    } while (seguir);

    document.write("a) La cantidad de números pares es: " + contadorPar);
    document.write("<br>b) La cantidad de números impares es: " + contadorImpar);
    document.write("<br>c) La cantidad de ceros es: " + contadorCero);
    document.write("<br>d) El promedio de todos los números positivos ingresados es: " + promedioPositivo);
    document.write("<br>e) La suma de todos los números negativos es: -" + acumuladorNegativo);
    document.write("<br>f) El número y la letra del máximo es: " + numeroMaximo + letraMaximo + " y del mínimo es: " + numeroMinimo + letraMinimo);
}

function mostrar()
{
// variables para pedir datos:
    var altura;
    var sexo;
    var cantidad = 2;
    // la cantidad es 5 jugadores

// variables para procesar los datos:
    var promedio;
    var acumuladorAltura = 0;
    
    var alturaBaja;
    var sexoAlturaBaja;
    var flag = 0;

    var contadorMujeres = 0;

// variables para mostrar info:
    var mensaje;

    // como sé la cantidad de iteraciones en tiempo de compilación, uso "for":
    for (var i=0; i<cantidad; i++) {

        altura = parseInt(prompt("Ingrese la altura en cm"));

        while (!(altura <= 250 && altura >= 0)) {
            altura = parseInt(prompt("Altura inválida. Ingrese nuevamente la altura (entre 0 y 250 cm)."));
        }

        sexo = prompt("Ingrese el sexo: 'f' para mujer y 'm' para hombre").toLowerCase();

        while (!(sexo == "f" || sexo == "m")) {
            sexo = prompt("Ingreso inválido. Ingrese nuevamente el sexo: 'f' para mujer y 'm' para hombre").toLowerCase();
        }

        acumuladorAltura += altura;
        
        if (altura < alturaBaja || flag == 0) {
            alturaBaja = altura;
            sexoAlturaBaja = sexo;
            flag = 1;
        }

        if (altura > 190 && sexo == "f") {
            contadorMujeres++;
        }
    }

    promedio = acumuladorAltura / cantidad;

    // muestro la info:

    mensaje = "a) El promedio de las alturas totales es: " + promedio + "\nb) La altura más baja es: " + alturaBaja + " y el sexo: " + sexoAlturaBaja + "\nc) La cantidad de mujeres que su altura supera los 190 centimetros es: " + contadorMujeres;

    alert(mensaje);
}

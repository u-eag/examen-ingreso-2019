function mostrar() 
{
        var hora;

        var mensaje;
        flag = true;

        // pido el dato:

        hora = parseInt(document.getElementById("laHora").value);

        // proceso el dato:

        if (hora <= 24 && hora >= 0) {

                switch (hora) {

                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                                mensaje = "es de mañana";
                                break;
                        
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                        case 19:
                                mensaje = "es de tarde";
                                break;
                        
                        default:
                                mensaje = "es de noche";
                                // si la hora está entre las 20 y las 24 (ambas incluidas), mandarlo a dormir
                                if (hora <= 24 && hora >= 20) {
                                        mensaje = mensaje + ", a dormir";
                                }
                }
        } else {
                alert("Ingreso inválido. Inténtelo nuevamente con un número entre 0 y 24.");
                flag = false;
        }

        // muestro la info:

        if (flag) {
        alert(mensaje);
        }
}
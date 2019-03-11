function mostrar()
{
    var pais;
    var habitantes;
    var temperaturaMinima;

    var seguir;

    // variable para el punto a):
    var contadorTemperaturaPar = 0;

    // variables para el punto b):
    var menosHabitantes = 7001;
    var paisMenosHabitantes;

    // variable para el punto c):
    var contadorTemperatura40 = 0;

    // variables para el punto d):
    var acumuladorHabitantes = 0;
    var contadorHabitantes = 0;
    var promedioHabitantes;

    // variables para el punto f):
    var temperaturaMinimaIngresada;
    var paisTemperaturaMinimaIngresada;
    var flag = 0;

    // como los datos deben ingresarse al menos una vez, uso "do while":
    do {
        pais = prompt("Ingrese el nombre del país");

        habitantes = parseFloat(prompt("Ingrese la cantidad de habitantes (en millones)"));

        while (!(habitantes <= 7000 && habitantes >= 1)) {
            habitantes = parseFloat(prompt("Cantidad de habitantes inválida. Ingrese nuevamente la cantidad de habitantes (en millones)"));
        }

        temperaturaMinima = parseFloat(prompt("Ingrese la temperatura mínima que se registra en su territorio (en grados)"));

        while (!(temperaturaMinima <= 50 && temperaturaMinima >= -50)) {
            temperaturaMinima = parseFloat(prompt("Ingrese la temperatura mínima que se registra en su territorio (en grados)"));
        }

        // punto a):
        if (temperaturaMinima % 2 == 0) {
            contadorTemperaturaPar++;
        }
        
        // punto b):
        if (habitantes < menosHabitantes) {
            menosHabitantes = habitantes;
            paisMenosHabitantes = pais;
        }

        // punto c):
        if (temperaturaMinima > 40) {
            contadorTemperatura40++;
        }

        // pundos d):
        acumuladorHabitantes += habitantes;
        contadorHabitantes++;
        promedioHabitantes = acumuladorHabitantes / contadorHabitantes;

        // punto f):
        if (temperaturaMinima < temperaturaMinimaIngresada || flag == 0) {
            temperaturaMinimaIngresada = temperaturaMinima;
            paisTemperaturaMinimaIngresada = pais;
        }

        seguir = confirm("¿Desea continuar ingresando datos?");
    } while (seguir);

    document.write("a) La cantidad de temperaturas pares es: " + contadorTemperaturaPar);
    document.write("<br>b) El nombre del pais con menos habitantes  es: " + paisMenosHabitantes);
    document.write("<br>c) La cantidad de paises que superan los 40 grados es: " + contadorTemperatura40);
    document.write("<br>d) El promedio de habitantes entre los paises ingresados  es: " + promedioHabitantes);
    // no existe el punto e)
    document.write("<br>f) La temperatura mínima ingresada es: " + temperaturaMinimaIngresada + " y nombre del pais que registro esa temperatura es: " + paisTemperaturaMinimaIngresada);
}

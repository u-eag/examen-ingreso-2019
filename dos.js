function mostrar()
{
    var nombre1;
    var nombre2;
    var peso1;
    var peso2;
    
    var suma;
    var promedio;

    var mensaje;

    // pido los datos:

    nombre1 = prompt("Ingrese su nombre");

    peso1 = parseFloat(prompt("Ingrese su peso"));

    nombre2 = prompt("Ingrese el nombre de su pareja");

    peso2 = parseFloat(prompt("Ingrese el peso de su pareja"));

    // proceso los datos:

    suma = peso1 + peso2;

    promedio = suma / 2;

    // muestro la información:

    mensaje = "Ustedes se llaman " + nombre1 + " y " + nombre2 + " pesan " + peso1 + " y " + peso2 + " kilos, que sumados son " + suma + " kilos y el promedio de peso " + promedio;

    alert(mensaje);
}

let tabla = prompt("Ingrese una tabla de multiplicar!")

function TablaMultiplicar(tabla) {

    document.write("<h1> Tabla de multiplicar del" + " " + tabla + "</h1>");

    document.write("<ul>");
    for (i = 1; i <= 10; i++) {

        document.write("<li>");
        document.write(tabla + " " + "x" + " " + i + "= " + tabla * i);
        document.write("</li>");
    }

    document.write("</ul>");
}

TablaMultiplicar(tabla);
export class Direcciones {
    nombre: string;
    apellidos: string;
    edad: number;
    dni: string;
    cumpleaños: string;
    colorFavorito: string;
    sexo: string;
    direcciones: string;
    mails: string;
    telefono: number;
    notas: string;

    // contructor

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleaños: string, colorFavorito: string, 
        sexo: string, direcciones: string, mails: string, telefono: number, notas: string) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni;
    this.cumpleaños = cumpleaños;
    this.colorFavorito = colorFavorito;
    this.sexo = sexo;
    this.direcciones = direcciones;
    this.mails = mails;
    this.telefono = telefono;
    this.notas = notas;
    }
}
    // almacenar datos del codigo HTML
        let NuevoContacto = document.getElementById("guardar").addEventListener("click", () => {
        // Obtener los valores añadido por el usario y guardarlos en un array
        let nombre = document.getElementById("nombre");
        let edad = document.getElementById("edad");
        let dni = document.getElementById("dni");
        let colorFavorito = document.getElementById("colorFavorito");
        let sexo = document.getElementById("sexo");
        let direcciones = document.getElementById("direcciones");
        let mails = document.getElementById("mails");
        let telefono = document.getElementById("telefono");
        let notas = document.getElementById("notas");
    });

export class Direcciones {
    calle: string;
    numero: number;
    piso: number;
    letra: string;
    codigoPostal: number;
    poblacion: string;
    provincia: string;

    // contructor

    constructor(calle: string, numero: number, piso: number, letra: string, codigoPostal: number, poblacion: string, provincia: string) {
    this.calle = calle;
    this.numero = numero;
    this.piso = piso;
    this.letra = letra;
    this.codigoPostal = codigoPostal;
    this.poblacion = poblacion;
    this.provincia = provincia;
    }

}


    // almacenar datos del codigo HTML
    let AñadirDireccion = document.getElementById("guardar").addEventListener("click", () => {
        // Obtener los valores añadido por el usario y guardarlos en un array
        let nombreCalle = document.getElementById("calle");
        let numeroPiso = document.getElementById("piso");
        let letraPiso = document.getElementById("letra");
        let codigoPostalUsuario = document.getElementById("codigoPostal");
        let poblacionUsuario = document.getElementById("poblacion");
        let provinciaUsuario = document.getElementById("provincia");
    });


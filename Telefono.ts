export class Telefono {
    tipoTelefono: string;
    numeroTelefono: number;
    
    // contructor
    constructor(tipoTelefono: string, numeroTelefono: number) {
    this.tipoTelefono = tipoTelefono;
    this.numeroTelefono = numeroTelefono;
    }
 }
    // almacenar datos del codigo HTML
    let telefonoUsuario = document.getElementById("guardar").addEventListener("click", () => {
        // Obtener los valores añadido por el usario y guardarlos en un array
        let tipoTelefono= document.getElementById("tipoTelefono");
        let numeroTelefono = document.getElementById("numeroTelefono");
});
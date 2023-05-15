export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    fechaIni: number;
    fechaFin: number;
    img: string;

    constructor(nombreE: string, descripcionE: string, fechaIni: number, fechaFin: number, img: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaIni = fechaIni;
        this.fechaFin = fechaFin;
        this.img = img;
    }
}

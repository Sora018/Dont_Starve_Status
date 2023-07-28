class Personagem{
    constructor(forca,destreza,constituicao,inteligencia,sabedoria,carisma){
    this.forca = forca;
    this.destreza = destreza;
    this.constituicao = constituicao;
    this.inteligencia = inteligencia;
    this.sabedoria = sabedoria;
    this.carisma = carisma;
    }
    forca(){
        console.log("Força= "+this.forca);
    }
}

let Bárbaro = new Ficha(8,2,5,1,1,3);

let ficha = new Ficha();

class Personagem{
    constructor(nome,vida,fome,sanidade){
    this.nome = nome;
    this.vida = vida;
    this.fome = fome;
    this.sanidade = sanidade;
    }
}
class Ficha{
    mostrarAtributos(per){
        console.log("Nome: "+per.nome);
        console.log("Vida: "+per.vida);
        console.log("Fome: "+per.fome);
        console.log("Sanidade: "+per.sanidade);
        console.log("");
    }
}
let wilson = new Personagem("Wilson",150,150,200);
let willow = new Personagem("Willow",150,150,120);
let wolfgang = new Personagem("Wolfgang",200,200,200);
let wendy = new Personagem("Wendy",150,150,200);
let wx78 = new Personagem("WX-78",125,125,150);
let wickerbottom = new Personagem("Wickerbottom",125,150,250);
let woodie = new Personagem("Woodie",150,150,200);
let wes = new Personagem("Wes",75,75,75);
let maxwell = new Personagem("Maxwell",75,150,200);
let wigfrid = new Personagem("Wigfrid",200,120,120);
let webber = new Personagem("Webber",175,175,100);
let winona = new Personagem("Winona",150,150,200);
let warly = new Personagem("Warly",150,250,200);
let wortox = new Personagem("Wortox",200,175,150);
let wormwood = new Personagem("Wormwood",150,150,200);
let wurt = new Personagem("Wurt",150,200,150);
let walter = new Personagem("Walter",130,110,200);
let wanda = new Personagem("Wanda","20-80",175,200);
let wonkey = new Personagem("Wonkey",125,175,100);

let f = new Ficha();

f.mostrarAtributos(wilson);
f.mostrarAtributos(willow);
f.mostrarAtributos(wolfgang);
f.mostrarAtributos(wendy);
f.mostrarAtributos(wx78);
f.mostrarAtributos(wickerbottom);
f.mostrarAtributos(woodie);
f.mostrarAtributos(wes);
f.mostrarAtributos(maxwell);
f.mostrarAtributos(wigfrid);
f.mostrarAtributos(webber);
f.mostrarAtributos(winona);
f.mostrarAtributos(warly);
f.mostrarAtributos(wortox);
f.mostrarAtributos(wormwood);
f.mostrarAtributos(wurt);
f.mostrarAtributos(walter);
f.mostrarAtributos(wanda);
f.mostrarAtributos(wonkey);
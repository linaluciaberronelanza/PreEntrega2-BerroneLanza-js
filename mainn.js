const datos = [prompt("Ingresa tu nombre"), prompt("Ingresa tu apellido"), prompt("Ingresa tu ciudad")];

alert("Hola " + datos[0] + " " + datos[1] + ". De " + datos[2] + ",¿Como estas?");

const nombreCompleto = datos.slice(0, 2)
const nombreJunto = nombreCompleto.join(" ")
document.write("Hola " + nombreJunto + ",¿Como estas?; <br/> ")

class suscripcion {
    constructor(nombre, precio, iva) {
        this.name = nombre;
        this.money = precio;
        this.imp = iva;
        this.info = `Estas por adquirir la suscripcion ${this.name}, que sale ${this.money}, con la siguiente característica: ${this.imp}`;
    }
    verInfo() {
        alert(this.info)
    }
}

const basic = new suscripcion("BASICA", "$100", "si se adiciona IVA");
const media = new suscripcion("MEDIA", "$200", "no se adiciona IVA");
const premium = new suscripcion("PREMIUM", "$300", "descuento del 50% sobre el total");

function si(dinero) {
    if (dinero === 100) {
        basic.verInfo();
    } else if (dinero === 200) {
        media.verInfo();
    } else if (dinero === 300) {
        premium.verInfo();
    } else {
        alert("No puedes adquirir una suscripcion, coloca un monto sugerido")
    }
}

let rta = "";

do {
    let dinero = Number(prompt("¿Cuanto dinero quieres gastar? (Ingresa 100, 200 o 300)"));
    si(dinero);

    const contador = [dinero]
    contador.forEach((dinero) => {
        document.write(dinero + " <br/>")
    });

    // esta parte no tiene mucha relacion ni mucho sentido, pero tenia que incorporar el objeto math o el contructor date, asi que le sumo PI a los numeros ingresados de suscripciones
    const total = Number(contador) + Math.PI;
    document.write(total);

    rta = prompt("Desea salir?" + "\n" + "(ingrese salir para salir)").toLocaleLowerCase();

} while (rta != "salir");

console.log(rta);
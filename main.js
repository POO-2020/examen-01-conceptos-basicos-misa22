import Huesped from "./huesped.js";
import Reservacion from "./reservacion.js";
import Hotel from "./hotel.js"
const huesped1 = new Huesped("Eduaro Misael Solano Rolon", "Masculino");
const probarHuesped = _ => console.log(huesped1.getDescripcion());
probarHuesped();
const reservacion1 = new Reservacion(240, new Date(2020, 1, 25), 4, 3);
reservacion1.addHuesped(huesped1);
reservacion1.getFechaFormatoCorto();
console.log(reservacion1.getNumHuespedes())
const hotel = new Hotel("Volcanes");
hotel.reservaciones.push(reservacion1);
hotel.print();

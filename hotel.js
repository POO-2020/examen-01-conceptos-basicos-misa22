export default class Hotel{
    /**
     * 
     * @param {string} nombre 
     */
    constructor(nombre){
        this.nombre= nombre;
        this.reservaciones=[];
    }
    getNumHuespedes(){
        var numHuespedes=0;
        this.reservaciones.forEach(reservacion=>{
            numHuespedes+=reservacion.huespedes.length;
            
        });
        return numHuespedes;
    }
    print(){
        this.reservaciones.forEach(reservacion=>{
            reservacion.print();
        })
    }
}
export default class Huesped{
  /**
   * @param {string} nombre nombre completo del huesped;
   * @param {string} genero el genero del huesped;
   */
  constructor(nombre,genero){
      this.nombre = nombre;
      this.genero = genero;
  }
  getDescripcion(){
      return `${this.nombre}(${this.genero})`;
  }
}
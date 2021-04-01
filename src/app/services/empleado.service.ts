import { Injectable } from '@angular/core';
import {Empleado} from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  listEmpleados: Empleado[] = [
    { nombreCompleto: 'Lucas Martinez1', correo: 'a@g.com', telefono: '1234', sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    { nombreCompleto: 'Lucas Martinez2', correo: 'a@g.com', telefono: '1234', sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    { nombreCompleto: 'Lucas Martinez3', correo: 'a@g.com', telefono: '1234', sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    { nombreCompleto: 'Lucas Martinez4', correo: 'a@g.com', telefono: '1234', sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    { nombreCompleto: 'Lucas Martinez4', correo: 'a@g.com', telefono: '1234', sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    { nombreCompleto: 'Lucas Martinez5', correo: 'a@g.com', telefono: '1234', sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'}
  ];

  constructor() { }

  getEmpleados() {
    return this.listEmpleados.slice();
  }

  eliminarEmpleado(index : number){
    this.listEmpleados.splice(index,1);
  }

  agregarEmpleado(empleado : Empleado){
    this.listEmpleados.unshift(empleado);
  }

  getEmpleado(index : number){
    return this.listEmpleados[index];
  }

  editEmpleado(empleado : Empleado, idEmpleado : number){
    this.listEmpleados[idEmpleado].nombreCompleto = empleado.nombreCompleto;
    this.listEmpleados[idEmpleado].correo         = empleado.correo;
    this.listEmpleados[idEmpleado].fechaIngreso   = empleado.fechaIngreso;
    this.listEmpleados[idEmpleado].sexo           = empleado.sexo;
    this.listEmpleados[idEmpleado].estadoCivil    = empleado.estadoCivil;
    this.listEmpleados[idEmpleado].telefono       = empleado.telefono;
  }
}

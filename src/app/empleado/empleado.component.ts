import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../servicios/empleado.service';
import { EmpleadoModel } from '../Modelos/Empleado.Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  public  dataEmpleados : EmpleadoModel[] = []
  constructor(
    private empleadoService: EmpleadoService,
    private router         : Router,
  ) { 

    this.empleadoService.getEmpleados().subscribe(
      (resp:EmpleadoModel[])=>{ 
        console.log(resp)
        this.dataEmpleados = resp
      },
      (err) =>console.error(err)
    )
  }

  ngOnInit(): void {
  }

  editar(editEmpleado:EmpleadoModel){
    this.router.navigate(['/editEmpleado',editEmpleado.DPI])
  }

  sueldos(editEmpleado:EmpleadoModel){
    this.router.navigate(['/sueldo',editEmpleado.DPI])
  }

  nuevoEmpleado(){
    this.router.navigate(['/addEmpleado'])
  }

}

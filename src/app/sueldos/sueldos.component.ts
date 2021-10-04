import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmpleadoService } from '../servicios/empleado.service';
import { SueldosService } from '../servicios/sueldos.service';
import { SueldoModel } from '../Modelos/Sueldo.Model';
import { EmpleadoModel } from '../Modelos/Empleado.Model';

@Component({
  selector: 'app-sueldos',
  templateUrl: './sueldos.component.html',
  styleUrls: ['./sueldos.component.css']
})
export class SueldosComponent implements OnInit {

  public dataSueldo : SueldoModel[] = []
  public dataEmpleado : EmpleadoModel ;
  constructor(
    private empleadoService: EmpleadoService,
    private sueldoService: SueldosService,
    private router         : Router,
    private activatedRouter          : ActivatedRoute,
  ) {

    this.activatedRouter.params.subscribe((params:Params) => {
      const DPI = params['DPI'];  
      this.cargarInformacion(DPI);
    })

   }

   cargarInformacion(DPI: number){
    this.sueldoService.getSueldos(DPI).subscribe(
      (resp: SueldoModel[])=>{this.dataSueldo = resp;},
      (err)=>{console.error(err)}
    )

    this.empleadoService.getEmpleado(DPI).subscribe(
      (resp:EmpleadoModel)=>{ this.dataEmpleado = resp  },
      (err)=> { console.error(err)}
    )
   }

  ngOnInit(): void {
  }

  nuevoSueldo(){
    this.router.navigate(['/sueldo/add',this.dataEmpleado.DPI])
  }

  eliminar(sueldo:SueldoModel){
    const opcion = confirm("Desea eliminar el registro");
    if (opcion == true) {
      this.sueldoService.deleteSueldo(sueldo.ID, sueldo.DPI).subscribe(
        (resp) =>{this.dataSueldo= this.dataSueldo.filter(f => f.ID !=sueldo.ID)},
        (err)=>{console.error(err)}
      );
     
	  }
  }

  editar(sueldo:SueldoModel){
    this.router.navigate(['/sueldo/edit',sueldo.ID,this.dataEmpleado.DPI])
  }

  regresar(){
    this.router.navigate(['/'])
  }
}

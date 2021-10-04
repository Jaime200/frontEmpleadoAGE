import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DireccionModel } from '../Modelos/Direccion.Model';
import { EmpleadoModel } from '../Modelos/Empleado.Model';
import { DireccionService } from '../servicios/direccion.service';
import { EmpleadoService } from '../servicios/empleado.service';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {

  public dataDireccion: DireccionModel[] = []
  public dataEmpleado: EmpleadoModel;
  constructor(
    private direccionService : DireccionService,
    private empleadoService: EmpleadoService,
    private router         : Router,
    private activatedRouter          : ActivatedRoute,
  ) { 
    this.activatedRouter.params.subscribe((params:Params) => {
      const DPI = params['DPI'];  
      this.cargarInformacion(DPI);
    })

  }

  ngOnInit(): void {
  }

  nuevaDireccion(){
    this.router.navigate(['/direccion/add',this.dataEmpleado.DPI])
  }

  cargarInformacion(DPI: number){
    this.direccionService.getDirecciones(DPI).subscribe(
      (resp: DireccionModel[])=>{this.dataDireccion = resp;},
      (err)=>{console.error(err)}
    )
    this.empleadoService.getEmpleado(DPI).subscribe(
      (resp:EmpleadoModel)=>{ this.dataEmpleado = resp  },
      (err)=> { console.error(err)}
    )
  }

  eliminar(direccion: DireccionModel){
    const opcion = confirm("Desea eliminar el registro");
    if (opcion == true) {
      this.direccionService.deleteDireccion(direccion.ID, direccion.DPI).subscribe(
        (resp) =>{this.dataDireccion= this.dataDireccion.filter(f => f.ID !=direccion.ID)},
        (err)=>{console.error(err)}
      );
     
	  }
  }

}

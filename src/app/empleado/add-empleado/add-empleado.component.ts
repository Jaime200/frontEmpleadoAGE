import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EstadoCivilService } from '../../servicios/estado-civil.service';
import { SexosService } from '../../servicios/sexos.service';
import { EstadoCivilModel } from '../../Modelos/EstadoCivil.Model';
import { SexoModel } from '../../Modelos/Sexo.Model';
import { EmpleadoService } from '../../servicios/empleado.service';
import { EmpleadoModel } from '../../Modelos/Empleado.Model';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent implements OnInit {
  forma                             : FormGroup;
  public dataEstadoCivil : EstadoCivilModel[] = [];
  public dataSexo : SexoModel [] = [];
  constructor(
    private estadoCivil:EstadoCivilService,
    private sexoService:SexosService,
    private empleadoService: EmpleadoService
  ) { 
    this.forma = new FormGroup({

      "DPI" : new FormControl(2093431251906, [Validators.required,,Validators.maxLength(16)]),
      "PRIMER_NOMBRE" : new FormControl("Jaime", [Validators.required]),
      "SEGUNDO_NOMBRE" : new FormControl(""),
      "PRIMER_APELLIDO" : new FormControl("Muñoz" ,[Validators.required]),
      "SEGUNDO_APELLIDO" : new FormControl("",),
      "APELLIDO_CADASA" : new FormControl(""),
      "ESTADO_CIVIL" : new FormControl("1",),
      "SEXO" : new FormControl("1"),
      "NIT" : new FormControl("7040518-2"),
      "AFILIACION_IGSS" : new FormControl("2093431251906",[Validators.maxLength(16)]),
      "PASAPORTE" : new FormControl("2093431251906",[Validators.maxLength(16)]),
      "IRTRA" : new FormControl("2093431251906",[Validators.maxLength(16)]),
      // "CODIGO_BANCO"            : new FormControl(null,[Validators.required, Validators.maxLength(4)]),
      // "NOMBRE_BANCO"            : new FormControl(null,[Validators.required, Validators.maxLength(40)]),
      // "CONTACTO_BANCO"          : new FormControl(null,[Validators.maxLength(40)]),
      // "TRASLADOS_AUTOMATICO"    : new FormControl(null,[Validators.maxLength(1)]),
      // "BANCO_CONCILIACION"      : new FormControl(null,[Validators.maxLength(10)]),
      // "UTILIZACION_EN_MONTO"    : new FormControl(null,[Validators.maxLength(1)]),

    })
  }

  ngOnInit(): void {
    this.estadoCivil.getEstadoCivils().subscribe(
      (resp:EstadoCivilModel[])=>{
        console.log(resp)
        this.dataEstadoCivil = resp   
      },
      (err)=> console.error(err)
    )

    this.sexoService.getSexos().subscribe(
      (resp:SexoModel[])=>{ this.dataSexo = resp   },
      (err)=> console.error(err)
    )
  }

  guardar(){
    if(this.forma.invalid) {
      alert("Debe ingresar correctamente la informacion")
      return ;
    }
    const nuevoEmpleado : EmpleadoModel = { ...this.forma.value}    
    console.log(nuevoEmpleado)
    this.empleadoService.addEmpleados(nuevoEmpleado).subscribe(
      (resp)=>{ 
        alert("Empleado Ingresado")
        console.log(resp)  },
      (err) => { 
        alert("Error "+ err.error)
        console.error(err) }
    )
  }

}

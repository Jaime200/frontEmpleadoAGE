import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EstadoCivilService } from '../../servicios/estado-civil.service';
import { SexosService } from '../../servicios/sexos.service';
import { EmpleadoService } from '../../servicios/empleado.service';
import { EstadoCivilModel } from '../../Modelos/EstadoCivil.Model';
import { SexoModel } from '../../Modelos/Sexo.Model';
import { EmpleadoModel } from '../../Modelos/Empleado.Model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css']
})
export class EditEmpleadoComponent implements OnInit {
  forma                             : FormGroup;
  public dataEstadoCivil : EstadoCivilModel[] = [];
  public dataSexo : SexoModel [] = [];
  private dataEmpleado : EmpleadoModel;
  constructor(
    private estadoCivil:EstadoCivilService,
    private sexoService:SexosService,
    private empleadoService: EmpleadoService,
    public activatedRouter          : ActivatedRoute,
  ) { 

    this.forma = new FormGroup({

      "DPI" : new FormControl('', [Validators.required,,Validators.maxLength(16)]),
      "PRIMER_NOMBRE" : new FormControl('', [Validators.required]),
      "SEGUNDO_NOMBRE" : new FormControl(''),
      "PRIMER_APELLIDO" : new FormControl('' ,[Validators.required]),
      "SEGUNDO_APELLIDO" : new FormControl('',),
      "APELLIDO_CASADA" : new FormControl(''),
      "ESTADO_CIVIL" : new FormControl('',),
      "SEXO" : new FormControl(''),
      "NIT" : new FormControl(''),
      "AFILIACION_IGSS" : new FormControl('',[Validators.maxLength(16)]),
      "PASAPORTE" : new FormControl('',[Validators.maxLength(16)]),
      "IRTRA" : new FormControl('',[Validators.maxLength(16)]),
    })

    this.activatedRouter.params.subscribe((params:Params) => {
      const DPI = params['DPI'];  
      this.cargarEmpleado(DPI);
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

  cargarEmpleado(DPI:number){
    this.empleadoService.getEmpleado(DPI).subscribe(
      (resp:EmpleadoModel)=>{ 
        this.dataEmpleado = resp;
        this.forma.setValue(resp)
        this.forma.controls['DPI'].disable();
      },

      (err)=> console.log(err)
    )
  }

  guardar(){
    if(this.forma.invalid) {
      alert("Debe ingresar correctamente la informacion")
      return ;
    }
    const updateEmpleado : EmpleadoModel = { ...this.forma.value}    
    updateEmpleado.DPI = this.dataEmpleado.DPI;
    this.empleadoService.putEmpleados(updateEmpleado).subscribe(
      (resp)=>{ 
        alert("Empleado Ingresado")
        console.log(resp)  },
      (err) => { 
        alert("Error "+ err.error)
        console.error(err) }
    )
  }

}

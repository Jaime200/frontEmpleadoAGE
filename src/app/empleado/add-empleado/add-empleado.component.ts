import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EstadoCivilService } from '../../servicios/estado-civil.service';
import { SexosService } from '../../servicios/sexos.service';
import { EstadoCivilModel } from '../../Modelos/EstadoCivil.Model';
import { SexoModel } from '../../Modelos/Sexo.Model';

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
    private sexoService:SexosService
  ) { 
    this.forma = new FormGroup({

      "DPI" : new FormControl(null, [Validators.required, Validators.maxLength(4)]),
      "PRIMER_NOMBRE" : new FormControl(null),
      "SEGUNDO_NOMBRE" : new FormControl(null),
      "PRIMER_APELLIDO" : new FormControl(null),
      "SEGUNDO_APELLIDO" : new FormControl(null),
      "APELLIDO_CASADA" : new FormControl(null),
      "ESTADO_CIVIL" : new FormControl(null),
      "SEXO" : new FormControl(null),
      "NIT" : new FormControl(null),
      "AFILIACION_IGSS" : new FormControl(null),
      "IRTRA" : new FormControl(null),
      "PASAPORTE" : new FormControl(null),

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
      return;
    }
  }

}

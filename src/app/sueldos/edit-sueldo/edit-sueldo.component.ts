import { Component, OnInit } from '@angular/core';
import { SueldoModel } from '../../Modelos/Sueldo.Model';
import { EmpleadoModel } from '../../Modelos/Empleado.Model';
import { EmpleadoService } from '../../servicios/empleado.service';
import { SueldosService } from '../../servicios/sueldos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-sueldo',
  templateUrl: './edit-sueldo.component.html',
  styleUrls: ['./edit-sueldo.component.css']
})
export class EditSueldoComponent implements OnInit {

  public dataSueldo : SueldoModel
  forma                             : FormGroup;
  private DPI :number;
  private id :number;

  constructor(
    private empleadoService: EmpleadoService,
    private sueldoService: SueldosService,
    private router         : Router,
    private activatedRouter          : ActivatedRoute,
  ) {

    this.forma = new FormGroup({

      "SUELDO_BASE" : new FormControl(0, [Validators.required]),
      "BONIFICACION" : new FormControl(0, [Validators.required])

    })

    this.activatedRouter.params.subscribe((params:Params) => {
      this.DPI = params['DPI'];  
      this.id = params['id'];  
      this.sueldoService.getSueldosById(this.id, this.DPI).subscribe(
        (resp:SueldoModel) => { 
          this.dataSueldo = resp 
          console.log(resp)
          this.forma.patchValue(resp)
        },
        (err) => {console.error(err)}
      )
      
    })
   }

  ngOnInit(): void {
  }

  guardar(){
    if(this.forma.invalid) {
      alert("Debe ingresar correctamente la informacion")
      return ;
    }
    const nuevoSueldo : SueldoModel = { ...this.forma.value}    
    nuevoSueldo.DPI = Number(this.DPI)
    nuevoSueldo.ID = Number(this.id)
    console.log(nuevoSueldo)
    this.sueldoService.putSueldo(nuevoSueldo).subscribe(
      (resp)=>{ 
        alert("Sueldo Ingresado")
          },
      (err) => { 
        alert("Error "+ err)
        console.error(err) }
    )
  }

  regresar(){
    this.router.navigate(['/sueldo',this.DPI])
  }

}

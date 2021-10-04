import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { SueldoModel } from '../../Modelos/Sueldo.Model';
import { SueldosService } from '../../servicios/sueldos.service';

@Component({
  selector: 'app-add-sueldo',
  templateUrl: './add-sueldo.component.html',
  styleUrls: ['./add-sueldo.component.css']
})
export class AddSueldoComponent implements OnInit {

  forma                             : FormGroup;
  private DPI :number;
  constructor(
    private sueldoService:SueldosService,
    private activatedRouter          : ActivatedRoute,
  ) {
    this.forma = new FormGroup({

      "SUELDO_BASE" : new FormControl(0, [Validators.required]),
      "BONIFICACION" : new FormControl(0, [Validators.required])

    })

    this.activatedRouter.params.subscribe((params:Params) => {
      this.DPI = params['DPI'];  
      
    })

   }

  ngOnInit(): void {
  }

  guardar(){
    if(this.forma.invalid) {
      alert("Debe ingresar correctamente la informacion")
      return ;
    }
    const neSueldo : SueldoModel = { ...this.forma.value}    
    neSueldo.DPI = Number(this.DPI)
    
    this.sueldoService.addSueldo(neSueldo).subscribe(
      (resp)=>{ 
        alert("Sueldo Actualizado")
          },
      (err) => { 
        alert("Error "+ err)
        console.error(err) }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DireccionModel } from '../../Modelos/Direccion.Model';
import { DireccionService } from '../../servicios/direccion.service';

@Component({
  selector: 'app-add-direccion',
  templateUrl: './add-direccion.component.html',
  styleUrls: ['./add-direccion.component.css']
})
export class AddDireccionComponent implements OnInit {

  public dataDireccion: DireccionModel[] = []
  forma                             : FormGroup;
  private DPI :number;
  constructor(
    private direccionService : DireccionService,
    private activatedRouter          : ActivatedRoute,
    private router         : Router,
  ) {
    this.forma = new FormGroup({
      "DIRECCION" : new FormControl(null, [Validators.required]),
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
    const newDireccion : DireccionModel = { ...this.forma.value}    
    
    newDireccion.DPI = Number(this.DPI)
    this.direccionService.addDireccion(newDireccion).subscribe(
      (resp)=>{ 
        alert("Direccion Agregada")
          },
      (err) => { 
        alert("Error "+ err)
        console.error(err) }
    )
  }

  regresar(){
    this.router.navigate(['/direccion',this.DPI])
  }

}

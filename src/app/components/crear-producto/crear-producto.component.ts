import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  productoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService) { 
    this.productoForm= this.fb.group({
      Producto:['', Validators.required],
      Categoria:['', Validators.required],
      Ubicacion:['', Validators.required],
      Precio:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarProducto(){
    console.log(this.productoForm )

    console.log(this.productoForm.get('Producto')?.value);

    const PRODUCTO : Producto = {
      nombre: this.productoForm.get('Producto')?.value,
      categoria: this.productoForm.get('Categoria')?.value,
      ubicacion: this.productoForm.get('Ubicacion')?.value,
      precio: this.productoForm.get('Precio')?.value
    }

    console.log(PRODUCTO);
    this.toastr.success('El producto fue registrado!', 'Produco registrado !');
    
  }

}

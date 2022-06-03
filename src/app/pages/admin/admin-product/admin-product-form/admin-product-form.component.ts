import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm : FormGroup
  constructor(private productService: ProductService,  private router:Router) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
      ]),
      email: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.productForm.value);
    const data = this.productForm.value
    this.productService.creatCategory(data).subscribe(data=>{
      this.router.navigate(['/admin/product'])
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css']
})
export class AdminCategoryFormComponent implements OnInit {
  categoryForm:FormGroup
  constructor(private cateService: CategoryService, private router:Router) {
    this.categoryForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        this.onValidateNameHasCategory
      ])
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    this.cateService.creatCategory(this.categoryForm.value).subscribe(()=>{
      alert('Thêm thành công! ')
      this.router.navigateByUrl('/admin/category')
    })

  }
  onValidateNameHasCategory(control:AbstractControl):ValidationErrors | null{
    const {value} = control;
    // this.cateService.getCategory().subscribe((data)=>{
    //   const nameCate = data.find(item=>item.name === value)
    //   if (nameCate) {
    //     return {hasNameCategory:true}
    //   }
    //   return null;

    // })
    if (!value.includes('product')) {
      return  {hasNameCategory:true}
    }
    return null;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css']
})
export class AdminCategoryFormComponent implements OnInit {
  categoryForm:FormGroup
  cateId :string
  constructor(private cateService: CategoryService, private router:Router,private activateRoute:ActivatedRoute) {
    this.categoryForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        this.onValidateNameHasCategory
      ])
    })
    this.cateId = ''
   }

  ngOnInit(): void {
    this.cateId = this.activateRoute.snapshot.params['id'];
    if (this.cateId) {
      this.cateService.getOneCategory(this.cateId).subscribe((data)=>{
        this.categoryForm.patchValue({
          name:data.name
        })
      })

    }
  }
  onSubmit(){
    // 1. Lấy dữ liệu từ form
    const submitData = this.categoryForm.value;

    if (this.cateId !== '' || this.cateId !== undefined) {
      return this.cateService.updateCate(this.cateId, this.categoryForm.value).subscribe(data => {
        this.router.navigateByUrl('/admin/category');
      });
    }

    // 2. Call API (Cần định nghĩa service và router điều hướng)
    return this.cateService.creatCategory(this.categoryForm.value).subscribe(()=>{
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

    //-- validate bắt buộc phải có từ 'product'--
    // if (!value.includes('product')) {
    //   return  {hasNameCategory:true}
    // }
    return null;
  }

}

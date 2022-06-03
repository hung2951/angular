import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/types/category';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
  categories :Category[]
  constructor(private categoryService: CategoryService) {
    this.categories = []
   }

  ngOnInit(): void {
    this.getList()
  }
  getList(){
    this.categoryService.getCategory().subscribe(data=>{
      this.categories = data
    })
  }
  onRemove(id:number){
    const confirm = window.confirm('Bạn có muốn xóa không?')
    if (confirm && id) {
      this.categoryService.removeCategory(id).subscribe(()=>{
        this.getList()
      })
    }

  }
}

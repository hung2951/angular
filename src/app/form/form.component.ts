import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  inputValues = {
    id:0,
    name: '',
    age: 0,
    email : '',
    phone : ''
  };
  users=[
    {
      id:1,
      name:'hungtv1',
      age:20,
      email:'hungtv1@gmail.com',
      phone:921211242
    },
    {
      id:5,
      name:'hungtv2',
      age:20,
      email:'hungtv2@gmail.com',
      phone:93853287
    }
  ]
  onSubmit(data:NgForm){
    //0. Tìm id lớn nhất
    const newUserId = this.users.map(user=>user.id).sort((a:number,b:number)=> b - a);
    const maxId = newUserId[0]
    //1. push dữ liệu vào mảng
    if (data.value.id==0) {
      this.users.push({...data.value,id:maxId+1})
    } else {
      // update
      this.inputValues = data.value

      // console.log(this.inputValues.id);
    }

    //2. Cập nhật giá trị của inputValues về default
  data.resetForm({
    id:0
  })
  }
  onRemove(id:number){
    const confirm = window.confirm('Bạn có muốn xóa không?')
    if (confirm) {
      this.users = this.users.filter(item=>item.id!==id)
    }
  }
  onEdit(user:any,id:number){
    const userOne = user.find((item:any)=>item.id==id)
    this.inputValues = userOne
  }
  constructor() { }

  ngOnInit(): void {
  }

}

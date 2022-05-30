import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users=[
    {
      id:1,
      name:'hungtv1',
      age:20,
      email:'hungtv1@gmail.com',
      phone:'921211242'
    },
    {
      id:5,
      name:'hungtv2',
      age:20,
      email:'hungtv2@gmail.com',
      phone:'93853287'
    }
  ]
  constructor() { }
  inputValues = {
      id:0,
      name: '',
      age: 0,
      email : '',
      phone :''
    };
  ngOnInit(): void {
  }
  onSubmit(data:any){

    //1. push dữ liệu vào mảng
    if (data.value.id==0) {
        //0. Tìm id lớn nhất
      const newUserId = this.users.map(user=>user.id).sort((a,b)=> b - a);
      const maxId = newUserId[0]
      return this.users.push({...data.value,id:maxId+1})
    }
    // update
    return this.users.forEach((user,index)=>{
       if (user.id=== data.value.id) {
         this.users[index] = data.value
       }
     })


    //2. Cập nhật giá trị của inputValues về default
    data.resetForm({
      id:0
    })

  }
  onEdit(id:number){
     const editUser = this.users.find(item=>item.id == id)
    if (editUser) {
      this.inputValues = {...editUser}
    }
  }
   onRemove(id:number){
     console.log(id);

    const confirm = window.confirm('Bạn có muốn xóa không?')
    if (confirm) {
      this.users = this.users.filter(user=>user.id !== id)
    }
  }
}

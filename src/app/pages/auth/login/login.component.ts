import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      email:new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.loginForm.value);
    this.authService.signin(this.loginForm.value).subscribe((data)=>{
      alert('Đăng nhập thành công')
      console.log(data);
      localStorage.setItem('user',JSON.stringify(data))

    })
  }
}

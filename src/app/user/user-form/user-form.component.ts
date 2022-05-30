import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input()inputValues:any
  @Output() handleSubmit:EventEmitter<any>
  constructor() {
    this.handleSubmit = new EventEmitter();
  }

  ngOnInit(): void {
  }
 onSubmit(data:NgForm){
   this.handleSubmit.emit(data)
    // Cập nhật giá trị của inputValues về default
    data.resetForm({
      id:0
    })
  }
}

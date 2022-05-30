import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users:any
  @Output() handleEdit:EventEmitter<number>
  @Output() handleRemove:EventEmitter<number>
  constructor() {
    this.handleEdit = new EventEmitter()
    this.handleRemove = new EventEmitter()
   }

  ngOnInit(): void {
  }
  onEdit(id:number){
    // bắn dữ liệu về conponent cha
    this.handleEdit.emit(id)
  }
  onRemove(id:number){
    this.handleRemove.emit(id)
  }
}

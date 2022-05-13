import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dame',
  templateUrl: './dame.component.html',
  styleUrls: ['./dame.component.css']
})
export class DameComponent implements OnInit {
  @Input() champs: any
  constructor() { }

  ngOnInit(): void {
  }

}

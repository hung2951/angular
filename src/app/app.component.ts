import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  name = 'hungtv2951';
  class = 'we16301';
  students = [
    {
      name: 'hung1',
      id: 'PH1',
      status: 0
    },
    {
      name: 'hung2',
      id: 'PH2',
      status: 0
    },
    {
      name: 'hung3',
      id: 'PH3',
      status: 1
    }
  ];

  LMHT = [
    {
      name: 'Eᴢreal',
      dame: 500,
      price: 6500,
      avatar: 'https://camnang24h.net/wp-content/uploads/2019/04/hinh-nen-tuong-Ezreal-trong-lien-minh-huyen-thoai-6.jpg'
    },
    {
      name: 'Draᴠen',
      dame: 900,
      price: 2000,
      avatar: 'https://camnang24h.net/wp-content/uploads/2019/04/hinh-nen-tuong-Ezreal-trong-lien-minh-huyen-thoai-6.jpg'
    },
    {
      name: 'Eᴢreal',
      dame: 500,
      price: 10000,
      avatar: 'https://camnang24h.net/wp-content/uploads/2019/04/hinh-nen-tuong-Ezreal-trong-lien-minh-huyen-thoai-6.jpg'
    }

  ];
  studentName = 'Trương Văn Hùng'
  studentMSV = 'PH12345'
}

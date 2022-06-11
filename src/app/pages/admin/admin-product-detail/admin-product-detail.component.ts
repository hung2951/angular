import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { cartProduct, Product } from 'src/app/types/product';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  id:string;
  product:Product
  cartValue:number
  constructor(private activateRoute: ActivatedRoute, private productService:ProductService) {
    this.id = '';
    this.product = {
      _id:0,
      name:'',
      price:0,
      img:'',
      desc:'',
      category:''
    }
    this.cartValue = 1
   }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe((data)=>{
      this.product = data

    })
  }
  onChange(event:any){
   this.cartValue = event.target.value
 }
 AddToCart(){
   const addItem = {
     ...this.product,
     quantity:+this.cartValue
   }
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]')
    // 2. kiểm tra trong giỏ đã có phần tử có id giống cartItem chưa
    const existItem = cartItems.find((item: cartProduct) =>
      item._id === addItem._id
    );
    if (!existItem) {
      cartItems.push(addItem);
    } else {
      existItem.quantity += addItem.quantity;
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.cartValue = 1;
 }
}

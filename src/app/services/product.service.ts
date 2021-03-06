import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../types/category';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(environment.products)
  }
  removeProduct(id:string|number):Observable<any>{
    return this.http.delete(`${environment.products}/${id}`)
  }
  getProduct(id:string):Observable<Product>{
    return this.http.get<Product>(`${environment.products}/${id}`)
  }
  creatCategory(data:Category):Observable<Category>{
    return this.http.post<Category>(`${environment.categories}`,data)
  }
}

import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  {
    path:'',
    component:ClientLayoutComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'product',
        component:ProductComponent
      },
      {
        path:'about',
        component:AboutComponent
      }
  ]
  },
  {
    path:'admin',
    component: AdminLayoutComponent,
    children:[
      // {
      //   path:'',
      //   redirectTo:'product',
      //   pathMatch:'full'
      // },
      {
        path:'product',
        children:[{
          path:'',
          component:AdminProductListComponent
        },
        {
          path:'create',
          component:AdminProductFormComponent
        },
        {
          path:':id/edit',
          component:AdminProductFormComponent
        }
      ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

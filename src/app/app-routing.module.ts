import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { PrivateAdminGuard } from './private/private-admin.guard';
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
    canActivate:[PrivateAdminGuard], // check login
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
        },
        {
          path:'detail/:id',
          component:AdminProductDetailComponent
        }
      ]
      },
      {
        path:'category',
        children:[{
          path:'',
          component:AdminCategoryListComponent
        },
        {path:'create',component:AdminCategoryFormComponent},
        {path:'edit/:id',component:AdminCategoryFormComponent},
      ]
      }
    ]
  },
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[PrivateAdminGuard]
})
export class AppRoutingModule { }

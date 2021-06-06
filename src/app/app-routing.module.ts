import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ShowComponent } from './show/show.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const productsModule = () => import('./products/products.module').then(x => x.ProductsModule);

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'usersCRUDsystem', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'productsCRUDsystem', loadChildren: productsModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'about', component: AboutComponent },
    { path: 'product', component: ProductComponent },
    { path: 'show', component: ShowComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

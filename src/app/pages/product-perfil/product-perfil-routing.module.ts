import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPerfilPage } from './product-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: ProductPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPerfilPageRoutingModule {}

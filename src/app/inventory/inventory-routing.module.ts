import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryHomeComponent } from './inventory-home/inventory-home.component';
import { ProductsComponent } from './products/products.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';
import { CategoriesComponent } from './categories/categories.component';
import { InventoryComponent } from './inventory.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      { path: '', redirectTo: '/inventory/home', pathMatch: 'full' },
      { path: 'home', component: InventoryHomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'stockEntry', component: StockEntryComponent },
      { path: 'categories', component: CategoriesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}

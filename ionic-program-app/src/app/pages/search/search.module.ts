// src/app/pages/search/search.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { SearchPage } from './search.page';
import { FilterModalModule } from '../../components/filter-modal/filter-modal.module';

const routes: Routes = [{ path: '', component: SearchPage }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FilterModalModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}

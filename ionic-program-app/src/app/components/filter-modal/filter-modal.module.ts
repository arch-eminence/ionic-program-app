// src/app/components/filter-modal/filter-modal.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FilterModalComponent } from './filter-modal.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [FilterModalComponent],
  exports: [FilterModalComponent]
})
export class FilterModalModule {}

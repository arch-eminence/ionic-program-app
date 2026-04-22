// src/app/components/filter-modal/filter-modal.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FILTER_TAGS, LEVELS, ATTENDANCES, COUNTRIES } from '../../models/program.model';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent implements OnInit {
  @Input() activeChips: string[] = [];

  allTags      = FILTER_TAGS;
  levels       = LEVELS;
  attendances  = ATTENDANCES;
  countries    = COUNTRIES;

  selectedTags: string[]  = [];
  selectedLevel           = '';
  selectedAttendance      = '';
  selectedCountry         = '';

  get totalSelected(): number {
    return this.selectedTags.length +
      (this.selectedLevel ? 1 : 0) +
      (this.selectedAttendance ? 1 : 0) +
      (this.selectedCountry ? 1 : 0);
  }

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.selectedTags = [...this.activeChips];
  }

  isTagSelected(tag: string): boolean {
    return this.selectedTags.includes(tag);
  }

  toggleTag(tag: string) {
    const i = this.selectedTags.indexOf(tag);
    if (i > -1) {
      this.selectedTags.splice(i, 1);
    } else {
      this.selectedTags.push(tag);
    }
  }

  reset() {
    this.selectedTags       = [];
    this.selectedLevel      = '';
    this.selectedAttendance = '';
    this.selectedCountry    = '';
  }

  apply() {
    this.modalCtrl.dismiss({
      chips:      this.selectedTags,
      level:      this.selectedLevel,
      attendance: this.selectedAttendance,
      country:    this.selectedCountry
    });
  }

  dismiss() {
    this.modalCtrl.dismiss(null);
  }
}

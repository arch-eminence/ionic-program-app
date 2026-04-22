// src/app/pages/search/search.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { Program, MOCK_PROGRAMS } from '../../models/program.model';
import { FilterModalComponent } from '../../components/filter-modal/filter-modal.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  selectedSubject: string = 'Computer Technologies';
  programs: Program[] = MOCK_PROGRAMS;
  filteredPrograms: Program[] = [];
  activeChips: string[] = ['Design', 'Design', 'Programing'];
  activeFilterCount: number = 3;

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.filteredPrograms = [...this.programs];
  }

  /** Navigate to detail page */
  goToDetail(program: Program) {
    this.router.navigate(['/detail', program.id]);
  }

  /** Toggle favorite */
  toggleFavorite(program: Program, event: Event) {
    event.stopPropagation();
    program.isFavorite = !program.isFavorite;
  }

  /** Share program */
  shareProgram(program: Program, event: Event) {
    event.stopPropagation();
    if (navigator.share) {
      navigator.share({ title: program.title, text: program.university });
    }
  }

  /** Remove a filter chip */
  removeChip(chip: string) {
    const index = this.activeChips.indexOf(chip);
    if (index > -1) {
      this.activeChips.splice(index, 1);
      this.activeFilterCount = this.activeChips.length;
    }
  }

  /** Toggle search dropdown */
  async toggleSearchDropdown() {
    const alert = await this.alertCtrl.create({
      header: 'What do you want to study?',
      inputs: [
        { name: 'subject', type: 'text', value: this.selectedSubject, placeholder: 'e.g. Computer Science' }
      ],
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Search',
          handler: (data) => {
            if (data.subject) {
              this.selectedSubject = data.subject;
              this.filterBySearch(data.subject);
            }
          }
        }
      ]
    });
    await alert.present();
  }

  /** Filter programs by search text */
  filterBySearch(query: string) {
    const q = query.toLowerCase();
    this.filteredPrograms = this.programs.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.university.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  /** Open filter modal */
  async openFilterModal() {
    const modal = await this.modalCtrl.create({
      component: FilterModalComponent,
      breakpoints: [0, 0.75, 1],
      initialBreakpoint: 0.75,
      cssClass: 'filter-modal',
      componentProps: { activeChips: [...this.activeChips] }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.activeChips = data.chips || [];
      this.activeFilterCount = this.activeChips.length;
      this.applyFilters(data);
    }
  }

  /** Open sort modal */
  async openSortModal() {
    const alert = await this.alertCtrl.create({
      header: 'Sort by',
      inputs: [
        { type: 'radio', label: 'Relevance',     value: 'relevance',  checked: true },
        { type: 'radio', label: 'Price: Low to High', value: 'price_asc' },
        { type: 'radio', label: 'Price: High to Low', value: 'price_desc' },
        { type: 'radio', label: 'Most Views',    value: 'views' },
      ],
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Apply',
          handler: (val) => this.sortPrograms(val)
        }
      ]
    });
    await alert.present();
  }

  /** Apply filters from modal */
  applyFilters(filterData: any) {
    let result = [...this.programs];
    if (filterData.level) {
      result = result.filter(p => p.level === filterData.level);
    }
    if (filterData.country) {
      result = result.filter(p => p.country === filterData.country);
    }
    if (filterData.chips && filterData.chips.length > 0) {
      result = result.filter(p =>
        p.tags.some(t => filterData.chips.includes(t))
      );
    }
    this.filteredPrograms = result;
  }

  /** Sort programs */
  sortPrograms(by: string) {
    switch (by) {
      case 'views':
        this.filteredPrograms.sort((a, b) => b.views - a.views);
        break;
      default:
        this.filteredPrograms = [...this.programs];
    }
  }
}

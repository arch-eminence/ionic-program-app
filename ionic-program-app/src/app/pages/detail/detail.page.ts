// src/app/pages/detail/detail.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Program, MOCK_PROGRAMS } from '../../models/program.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  program: Program | undefined;
  descExpanded   = false;
  reqExpanded    = false;
  structExpanded = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.program = MOCK_PROGRAMS.find(p => p.id === id);
  }

  /** Go back to search */
  goBack() {
    this.router.navigate(['/search']);
  }

  /** Toggle favorite */
  toggleFavorite() {
    if (this.program) {
      this.program.isFavorite = !this.program.isFavorite;
      this.showToast(this.program.isFavorite ? 'Added to favorites' : 'Removed from favorites');
    }
  }

  /** Share */
  share() {
    if (navigator.share && this.program) {
      navigator.share({
        title: this.program.title,
        text: `Check out ${this.program.title} at ${this.program.university}`
      });
    } else {
      this.showToast('Link copied to clipboard');
    }
  }

  /** Apply */
  async apply() {
    this.showToast('Application started! ✓');
  }

  private async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'bottom',
      cssClass: 'app-toast'
    });
    await toast.present();
  }
}

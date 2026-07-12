import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  titles = ['Full Stack Developer', 'Angular Specialist', '.NET Core Engineer', 'UI/UX Enthusiast'];
  currentTitle = '';
  titleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  private timer: any;

  socials = [
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/karuna-r', label: 'LinkedIn' },
    { icon: 'fab fa-whatsapp', url: 'https://wa.me/918111892907', label: 'WhatsApp' },
    { icon: 'fas fa-envelope', url: 'mailto:karunaramesh1213@gmail.com', label: 'Email' },
  ];

  ngOnInit() {
    this.typeEffect();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  typeEffect() {
    const current = this.titles[this.titleIndex];
    if (this.isDeleting) {
      this.currentTitle = current.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentTitle = current.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let speed = this.isDeleting ? 60 : 100;

    if (!this.isDeleting && this.charIndex === current.length) {
      speed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      speed = 400;
    }

    this.timer = setTimeout(() => this.typeEffect(), speed);
  }

  scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  highlights = [
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Palakkad, India' },
    { icon: 'fas fa-briefcase', label: 'Experience', value: '2+ Years' },
    { icon: 'fas fa-code', label: 'Domain', value: 'NBFC / Fintech' },
    { icon: 'fas fa-graduation-cap', label: 'Education', value: 'B.Sc Computer Science' },
    { icon: 'fas fa-language', label: 'Languages', value: 'English, Malayalam' },
    { icon: 'fas fa-envelope', label: 'Email', value: 'karunaramesh1213@gmail.com' },
  ];
}

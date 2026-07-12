import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'karunaramesh1213@gmail.com',
      href: 'mailto:karunaramesh1213@gmail.com',
      accent: '#00d4ff'
    },
    {
      icon: 'fab fa-whatsapp',
      label: 'WhatsApp',
      value: '+91 81118 92907',
      href: 'https://wa.me/918111892907',
      accent: '#25D366'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Palakkad, India',
      href: 'https://maps.google.com/?q=Palakkad,India',
      accent: '#ff6b6b'
    }
  ];

  socials = [
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/karuna-r', label: 'LinkedIn', color: '#0A66C2' },
    { icon: 'fab fa-github', url: 'https://github.com', label: 'GitHub', color: '#ffffff' },
  ];
}

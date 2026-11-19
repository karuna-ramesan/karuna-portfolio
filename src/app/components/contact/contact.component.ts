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
      value: 'karunaramesan@gmail.com',
      href: 'mailto:karunaramesan@gmail.com',
      accent: '#00d4ff'
    },
    {
      icon: 'fab fa-whatsapp',
      label: 'WhatsApp',
      value: '+971 589202819',
      href: 'https://wa.me/971589202819',
      accent: '#25D366'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Dubai, UAE',
      href: 'https://maps.google.com/?q=Dubai,UAE',
      accent: '#ff6b6b'
    }
  ];

  socials = [
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/karuna-r', label: 'LinkedIn', color: '#0A66C2' },
    { icon: 'fab fa-github', url: 'https://github.com/karuna-ramesan', label: 'GitHub', color: '#ffffff' },
  ];
}

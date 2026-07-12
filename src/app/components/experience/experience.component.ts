import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  activeIndex = 0;

  experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Manappuram Finance Ltd.',
      type: 'Angular & .NET Core',
      period: 'Feb 2024 – Apr 2026',
      location: 'Thrissur, Kerala, India',
      current: true,
      points: [
        'Designed and developed end-to-end web modules for loan lifecycle management, audit compliance, and risk monitoring in a large-scale NBFC environment.',
        'Built dynamic, responsive Angular frontends with complex form validations, role-based access control, and data-driven dashboards for operational teams.',
        'Developed robust .NET Core RESTful APIs to handle secure data transactions, business logic processing, and integration with Oracle/PL/SQL databases.',
        'Authored and optimized complex PL/SQL stored procedures for loan data retrieval, risk computation, and report generation across business units.',
        'Implemented loan audit workflows covering multi-stage verification, status tracking, and compliance reporting with full traceability.',
        'Participated in Agile sprints, conducted code reviews, resolved production bugs, and enhanced application performance and stability.',
      ],
      tags: ['Angular', '.NET Core', 'PL/SQL', 'SQL Server', 'Agile']
    }
  ];

  education = [
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'University of Calicut',
      period: 'May 2020',
      location: 'Kerala, India'
    }
  ];

  certifications = [
    {
      name: 'MEARN Stack Development',
      issuer: 'Luminar Technolab, Cochin',
      period: 'Dec 2022 – May 2023'
    }
  ];
}

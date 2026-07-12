import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillGroups = [
    {
      category: 'Frontend',
      icon: 'fas fa-laptop-code',
      color: '#00d4ff',
      skills: [
        { name: 'Angular', level: 92 },
        { name: 'TypeScript', level: 88 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML & CSS', level: 90 },
        { name: 'Bootstrap', level: 82 },
        { name: 'RxJS', level: 78 },
        { name: 'Reactive Forms', level: 85 },
      ]
    },
    {
      category: 'Backend',
      icon: 'fas fa-server',
      color: '#7b2fff',
      skills: [
        { name: 'ASP.NET Core', level: 88 },
        { name: 'C#', level: 86 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Entity Framework', level: 80 },
        { name: 'Middleware', level: 75 },
      ]
    },
    {
      category: 'Database',
      icon: 'fas fa-database',
      color: '#00ffaa',
      skills: [
        { name: 'SQL Server', level: 85 },
        { name: 'PL/SQL / Oracle', level: 82 },
        { name: 'Stored Procedures', level: 80 },
      ]
    },
    {
      category: 'Tools & Practices',
      icon: 'fas fa-tools',
      color: '#ff6b6b',
      skills: [
        { name: 'GitHub', level: 84 },
        { name: 'Excel', level: 82 },
        { name: 'Agile / Scrum', level: 85 },
        { name: 'Code Review', level: 80 },
        { name: 'Bug Fixing', level: 88 },
      ]
    }
  ];
}

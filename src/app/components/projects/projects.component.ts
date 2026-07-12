import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Audit Module',
      category: 'Loan Lifecycle Compliance',
      description: 'A comprehensive system to track and verify the complete lifecycle of loan accounts — from origination and disbursement to repayment and closure — with full audit trail and regulatory compliance.',
      highlights: [
        'Multi-stage verification workflows across all loan processing stages',
        'Role-based access control for audit officers',
        'Dynamic grids, filters, and detail views for discrepancy detection',
        'PL/SQL procedures for audit data integrity and compliance reporting',
      ],
      tags: ['Angular', '.NET Core', 'SQL', 'PL/SQL', 'RBAC'],
      icon: 'fas fa-clipboard-check',
      accent: '#00d4ff',
    },
    {
      title: 'MOSY – Monitoring System',
      category: 'Real-Time Portfolio Monitoring',
      description: 'A centralized monitoring platform giving operations and management a unified real-time view of loan histories, payment statuses, and account movements across all branches.',
      highlights: [
        'Advanced search, filter, and drill-down from branch to individual loans',
        'Aggregated data across distributed Oracle databases',
        'Configurable reporting views per business unit',
        'Single dashboard for payment history, outstanding balances, and movements',
      ],
      tags: ['Angular', '.NET Core', 'PL/SQL', 'Oracle', 'Dashboards'],
      icon: 'fas fa-chart-line',
      accent: '#7b2fff',
    },
    {
      title: 'EWS – Early Warning Signal',
      category: 'Risk Detection & Prevention',
      description: 'A proactive risk detection application that flags potential NPA accounts before they escalate, enabling relationship managers to intervene early and reduce credit losses.',
      highlights: [
        'Risk-scored loan account display for quick prioritization',
        'Backend processing of missed payments, overdue EMIs, and behavior patterns',
        'PL/SQL risk assessment on large loan portfolios',
        'Alert and reporting workflow for high-risk account notifications',
      ],
      tags: ['Angular', '.NET Core', 'Risk Engine', 'PL/SQL', 'Alerts'],
      icon: 'fas fa-shield-alt',
      accent: '#ff6b6b',
    },
    {
      title: 'Direct Assignment Module',
      category: 'Loan Portfolio Transfer',
      description: 'End-to-end management of loan pool transfers from Manappuram Finance to external financial institutions, supporting securitization and liquidity management goals.',
      highlights: [
        'Workflow for selecting, validating, and packaging loan pools',
        'Eligibility checks: NPA status, tenure, risk rating',
        'Angular interfaces for assignment tracking from initiation to completion',
        'Automated PL/SQL procedures for ownership updates and audit trails',
      ],
      tags: ['Angular', '.NET Core', 'PL/SQL', 'Securitization', 'APIs'],
      icon: 'fas fa-exchange-alt',
      accent: '#00ffaa',
    }
  ];
}

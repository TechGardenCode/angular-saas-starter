import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  commands = [
    'git clone https://github.com/techgardencode/angular-saas-starter',
    'npm install',
    'npm run start',
  ];

  copyToClipboard(commandList: string[]) {
    navigator.clipboard.writeText(commandList.join('\n'));
  }
}

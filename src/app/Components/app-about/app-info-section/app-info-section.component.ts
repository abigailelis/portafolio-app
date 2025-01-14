import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-section',
  standalone: false,

  templateUrl: './app-info-section.component.html',
  styleUrl: './app-info-section.component.scss'
})

export class AppInfoSectionComponent {
  @Input() icon: string | undefined;
  @Input() title: string | undefined;
  @Input() content: string | undefined;

}
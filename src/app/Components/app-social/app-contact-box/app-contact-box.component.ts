import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Contact {
  name: string;
  link: string;
  class: string;
}

@Component({
  selector: 'app-contact-box',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './app-contact-box.component.html',
  styleUrl: './app-contact-box.component.scss',
})

export class AppContactBoxComponent {

  @Input() contacts: Contact[] | undefined;

}

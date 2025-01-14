import { Component, OnInit } from '@angular/core'; 
import { navLinks } from '../../../config/links';

interface Link {
  name: string;
  link: string;
}

@Component({
    selector: 'app-nav',
    templateUrl: './app-nav.component.html',
    styleUrl: './app-nav.component.scss',
    standalone: false
})

export class AppNavComponent implements OnInit {
  links: Link[] = navLinks; 
  
  constructor() {} 
  
  ngOnInit(): void {}
}

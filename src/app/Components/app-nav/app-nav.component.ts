import { Component, OnInit } from '@angular/core';
import { LinkService } from './link.service';

interface Link {
  name: string;
  link: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrl: './app-nav.component.scss'
})

export class AppNavComponent implements OnInit {

  links: Link[] = [];

  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
    this.linkService.getLinks().subscribe((data: Link[]) => {
      this.links = data;
    });
  }
}

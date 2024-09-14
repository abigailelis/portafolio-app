import { Component, OnInit } from '@angular/core';
import { Project } from './Project';

@Component({
  selector: 'app-projects',
  templateUrl: './app-projects.component.html',
  styleUrl: './app-projects.component.scss'
})
export class AppProjectsComponent implements OnInit{

  projects: Project[] = [
  {
    name: "Zombilandia Web 2",
    img: "/assets/zombilandia.PNG",
    github: "https://github.com/abigailelis/Proyecto-Angular-Zombilandia.git"
  },
  {
    name: "Mundial 2022",
    img: "/assets/mundial.PNG",
    github: "https://github.com/abigailelis/Proyecto-Final-Web2-Mundial_2022.git"
  },
  {
    name: "Zombilandia Web 1",
    img: "/assets/zombilandia_1.PNG",
    github: "https://github.com/abigailelis/Proyecto-Final-Web2-Mundial_2022.git"
  }
]

  constructor(){}

  ngOnInit(): void {}

}

import { Component, OnInit } from '@angular/core';

interface Skill {
    name: string;
    class: string;
}

@Component({
    selector: 'app-skills',
    templateUrl: './app-skills.component.html',
    styleUrl: './app-skills.component.scss',
    standalone: false
})
export class AppSkillsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  skillsFront: Skill[] = [
    { name: "HTML 5", class: "fab fa-html5" },
    { name: "CSS 3",  class: "fab fa-css3-alt" },
    { name: "JavaScript", class: "fab fa-js" },
    { name: "Angular", class: "fab fa-angular" },
    { name: "Bootstrap", class: "fab fa-bootstrap" }
  ];

  skillsBack: Skill[] = [
    { name: "Java", class: "bi bi-filetype-java" },
    { name: "SQL", class: "bi bi-filetype-sql" },
    { name: "PHP", class: "bi bi-filetype-php" }
  ];

  skillsTools: Skill[] = [
    { name: "Trello", class: "bi bi-trello" },
    { name: "Git", class: "bi bi-git" },
    { name: "Github", class: "bi bi-github" },
    { name: "VS Code", class: "bi bi-code-slash" }
  ];

}

import { Component} from '@angular/core';

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
export class AppSkillsComponent {
  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  skillsFront: Skill[] = [
    { name: "HTML 5", class: "fab fa-html5 icon" },
    { name: "CSS 3",  class: "fab fa-css3-alt icon" },
    { name: "JavaScript", class: "fab fa-js icon" },
    { name: "Angular", class: "fab fa-angular icon" },
    { name: "Bootstrap", class: "fab fa-bootstrap icon" }
  ];

  skillsBack: Skill[] = [
    { name: "Java", class: "bi bi-filetype-java icon" },
    { name: "SQL", class: "bi bi-filetype-sql icon" },
    { name: "PHP", class: "bi bi-filetype-php icon" }
  ];

  skillsTools: Skill[] = [
    { name: "Trello", class: "bi bi-trello icon" },
    { name: "Git", class: "bi bi-git icon" },
    { name: "Github", class: "bi bi-github icon" },
    { name: "VS Code", class: "bi bi-code-slash icon" }
  ];

}

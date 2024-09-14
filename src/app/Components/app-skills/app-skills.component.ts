import { Component } from '@angular/core';
import { Skill } from './Skill';

@Component({
  selector: 'app-skills',
  templateUrl: './app-skills.component.html',
  styleUrl: './app-skills.component.scss'
})
export class AppSkillsComponent {

   
  skillsFront: Skill[] = [
    {
      name: "HTML 5",
      class: "fab fa-html5",
    },
    {
      name: "CSS 3",
      class: "fab fa-css3-alt",
    },
    {
      name: "JavaScript",
      class: "fab fa-js",
    },
    {
      name: "Angular",
      class: "fab fa-angular",
    },
    {
      name: "Bootstrap",
      class: "fab fa-bootstrap",
    }
  ]

  skillsBack: Skill[] = [
    {
      name: "Java",
      class: "fab fa-java",
    },
    {
      name: "PHP",
      class: "fab fa-php",
    },
    {
      name: "SQL",
      class: "bi bi-filetype-sql",
    }
  ]

  skills: Skill[] = [
    {
      name: "Trello",
      class: "bi bi-trello",
    },
    {
      name: "Git",
      class: "bi bi-git",
    },
    {
      name: "Github",
      class: "bi bi-github",
    },
    {
      name: "VS Code",
      class: "bi bi-code-slash",
    }
  ]
}

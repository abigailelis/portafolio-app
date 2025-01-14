import { Component } from '@angular/core';
import { Project } from '../Project';

@Component({
  selector: 'app-project',
  standalone: false,
  
  templateUrl: './app-project.component.html',
  styleUrl: './app-project.component.scss'
})
export class AppProjectComponent {

  projects: Project[] = [
    {
        name: "Social links profile challenge",
        img: "/assets/Screenshot-social-links-profile.PNG",
        link: "https://social-links-profile-challenge-abigail.vercel.app/",
        github: "https://github.com/abigailelis/git-test/tree/main/social-links-profile"
    },
    {
        name: "Blog preview card challenge",
        img: "/assets/Screenshot-card.PNG",
        link: "https://blog-preview-card-challenge-abigail.vercel.app/",
        github: "https://github.com/abigailelis/git-test/tree/main/blog-preview-card"
    },
    {
        name: "QR code component challenge",
        img: "/assets/Screenshot.PNG",
        link: "https://qr-code-component-challenge-abigail.vercel.app/",
        github: "https://github.com/abigailelis/git-test/tree/main/qr-code-component"
    },
    {
      name: "Zombilandia -  Proyecto Angular",
      img: "/assets/zombilandia.PNG",
      link: "https://zombilandia-angular.vercel.app/articles",
      github: "https://github.com/abigailelis/Proyecto-Angular-Zombilandia.git"
    },

  ]
}



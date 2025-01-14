import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Skill {
    name: string;
    class: string;
}

@Component({
    selector: 'app-skills-section',
    standalone: true, 
    imports: [CommonModule], 
    templateUrl: './app-skills-section.component.html',
    styleUrls: ['./app-skills-section.component.scss']
})
export class AppSkillSectionComponent {
    @Input() title: string | undefined;
    @Input() skills: Skill[] | undefined;
}


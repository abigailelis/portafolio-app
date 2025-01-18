import { Component } from '@angular/core';

interface Contact {
    name: string;
    link: string;
    class: string;
}

@Component({
    selector: 'app-social',
    templateUrl: './app-social.component.html',
    styleUrl: './app-social.component.scss',
    standalone: false
})

export class AppSocialComponent {

    constructor() { }

    contacts: Contact[] = [
        { name: "LinkdeIn", link: "https://www.linkedin.com/in/abigail-elis/", class: "fab fa-linkedin icon" },
        { name: "GitHub", link: "https://github.com/abigailelis", class: "fab fa-github icon" },
        { name: "WhatsApp", link: "https://wa.me/5492262366099", class: "fab fa-whatsapp icon" },
        { name: "Gmail", link: "mailto:abbigail.elis@gmail.com", class: "far fa-envelope icon" }
    ];

}

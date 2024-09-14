import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrl: './app-nav.component.scss'
})
export class AppNavComponent {
  
  desplegarMenu() {
    const menu = document.querySelector('#menu');
    if (menu != null) {
      if (menu.classList.contains('oculto'))
        menu.classList.remove('oculto');
      else
        menu.classList.add('oculto');
    }

  }
}


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, RouterLink],
  template: `
    <main>
      <header class="brand-name">
        <img
          src="../assets/logo.svg"
          alt="logo"
          aria-hidden="true"
          class="brand-logo"
          height="55px"
          [routerLink]="['']"
        />
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'autobahn';
}

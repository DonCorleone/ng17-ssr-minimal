import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <router-outlet></router-outlet>
  `,
  styles: `h1 {
    color: red;
  }`,
})
export class AppComponent {
  title = 'v17-ssr-minimal';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '[style.height]': '"100%"'
  }
})
export class AppComponent {
  title = 'desklab';
}

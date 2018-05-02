import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  FabOptions = {
    buttons: [
      {
        icon: 'timeline'
      },
      {
        icon: 'view_headline'
      },
      {
        icon: 'room'
      },
      {
        icon: 'lightbulb_outline'
      },
      {
        icon: 'lock'
      }
    ]
  };

}

import { Component } from '@angular/core';
import { FabAnimations } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: FabAnimations
})
export class AppComponent {
  animationState = 'inactive';

  onToggleFab() {
    if (this.animationState === 'inactive') {
      this.animationState = 'active';
    } else {
      this.animationState = 'inactive';
    }
  }
}

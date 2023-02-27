import { Component } from '@angular/core';
import { DISPLAY_GROUPS } from './consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayGroups: boolean = DISPLAY_GROUPS;
}

import { Component } from '@angular/core';
import { LabelDirective } from '../label.directive';

@Component({
  standalone: true,
  imports: [LabelDirective],
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {

}

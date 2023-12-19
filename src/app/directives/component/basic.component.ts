import { Component } from '@angular/core';
import { LabelDirective } from '../label.directive';
import { HeadingDirective } from '../heading.directive';

@Component({
  standalone: true,
  imports: [LabelDirective, HeadingDirective],
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class LabelComponent {}

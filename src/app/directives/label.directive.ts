import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'input[label]',
})
export class LabelDirective implements OnInit {
  private elm = inject(ElementRef);

  @Input({ required: true }) label!: string;

  ngOnInit(): void {
    (this.elm.nativeElement as HTMLElement).insertAdjacentHTML('beforebegin', '<label>' + this.label); // note: </label> will be automatically added to end of string result is: <label>label-name</label>
  }
}

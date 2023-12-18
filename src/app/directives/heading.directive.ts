import { OnInit, Directive, TemplateRef, ViewContainerRef, inject, Renderer2, ElementRef, ViewRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[headingText]'
})
export class HeadingDirective implements OnInit {
  private vc = inject(ViewContainerRef);
  private template = inject(TemplateRef<unknown>);
  private renderer = inject(Renderer2);
  

  // constructor() { 
  //   console.log('constructor');
  // }

  ngOnInit(): void {
    const innerText = this.template.elementRef.nativeElement

      const elm = this.renderer.createElement('h1') as HTMLElement; 
      elm.innerText = 'inner content';
      console.log(elm);
      const templ = this.template.createEmbeddedView(elm);
      console.log(templ);


      // this.vc.createEmbeddedView('<>', 'ter');

  }



//   private ankerBefore(ikoAnker: IkoAnker[]): void {
//     const ref = this.vc.createComponent(IkoIconComponent);
//     this.vc.createEmbeddedView(this.template);
//     ref.instance.content = this.addTarget(ikoAnker[0]?.content);
// }

}

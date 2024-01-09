import {
  Directive,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  inject
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[headingText]',
})
export class HeadingDirective implements OnInit {
  private vc = inject(ViewContainerRef);
  private template = inject(TemplateRef<unknown>);
  private renderer = inject(Renderer2);

  ngOnInit(): void {
    const elm = this.renderer.createElement('h1') as HTMLElement;
    const embeddedViewRef = this.template.createEmbeddedView(this.vc);
    const innerHtml = embeddedViewRef.rootNodes[0].innerHTML;
    
    elm.innerHTML = innerHtml;
    this.vc.insert(embeddedViewRef);
    embeddedViewRef.rootNodes[0].replaceWith(elm);
  }
}


import { MockProvider } from 'ng-mocks';
import {
  Component,
  ElementRef,
  ViewContainerRef,
  Renderer2,
  inject,
  TemplateRef,
  DebugElement,
  DebugNode,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeadingDirective } from './heading.directive';

@Component({
  standalone: true,
  imports: [HeadingDirective],
  template: `<div *headingText>Lorem Ipsum</div>`,
})
class TestComponent {}

describe('HeadingDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let directive: HeadingDirective;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     providers: [
  //       MockProvider(ViewContainerRef),
  //       MockProvider(TemplateRef),
  //       MockProvider(Renderer2),
  //     ],
  //   });
  // });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    directive = fixture.debugElement.queryAllNodes(By.directive(HeadingDirective))[0].injector.get(HeadingDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  describe('OnInit()', () => {
    it('should render h1 in the DOM', () => {
      fixture.detectChanges();
      const labelElement: HTMLElement = fixture.nativeElement.querySelector('h1');
      expect(labelElement.nodeName).toBe('H1');
    });
  });
});

import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LabelDirective } from './label.directive';

class ElementRefMock extends ElementRef {
  constructor() {
    super(undefined)
  }
}

// Mock component for testing Label Directive
@Component({
  standalone: true,
  imports: [LabelDirective],
  template: `<input placeholder="placeholder-text-here" [label]="'Label-name'"/>` 
})
export class TestComponent {}

describe('LabelDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directive: LabelDirective;
  let component: TestComponent;

  beforeEach(() => {
    // ElementRef deze is nodig ook al is de directive en component standalone, we moeten de test eerst nog providen.
    TestBed.configureTestingModule({
      providers: [{ provide: ElementRef, useClass: ElementRefMock }], // of providers: [{ provide: ElementRef, useValue: {} }] werkt ook
    });
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    directive = fixture.debugElement.query(By.directive(LabelDirective)).injector.get(LabelDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  describe('OnInit()', () => {
    it('should add <label></label> before input element', () => {      
      fixture.detectChanges(); // nodig voor update in de DOM
      const labelElement: HTMLElement = fixture.nativeElement.querySelector('label');
      expect(labelElement.innerHTML).toBe('Label-name');
    });
  });
});

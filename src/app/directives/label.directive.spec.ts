import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LabelDirective } from './label.directive';

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
    TestBed.configureTestingModule({
      providers: [{ provide: ElementRef, useValue: {} }],
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
      fixture.detectChanges();
      const labelElement: HTMLElement = fixture.nativeElement.querySelector('label');
      expect(labelElement.innerHTML).toBe('Label-name');
    });
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SojaPage } from './soja.page';

describe('SojaPage', () => {
  let component: SojaPage;
  let fixture: ComponentFixture<SojaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SojaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

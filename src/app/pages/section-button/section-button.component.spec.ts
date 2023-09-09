import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionButtonComponent } from './section-button.component';

describe('SectionButtonComponent', () => {
  let component: SectionButtonComponent;
  let fixture: ComponentFixture<SectionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

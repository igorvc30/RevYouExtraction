import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractionDistributionComponent } from './extraction-distribution.component';

describe('ExtractionDistributionComponent', () => {
  let component: ExtractionDistributionComponent;
  let fixture: ComponentFixture<ExtractionDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractionDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractionDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

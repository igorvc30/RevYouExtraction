import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractionSettingComponent } from './extraction-setting.component';

describe('ExtractionSettingComponent', () => {
  let component: ExtractionSettingComponent;
  let fixture: ComponentFixture<ExtractionSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractionSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractionSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

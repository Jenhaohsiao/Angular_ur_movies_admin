import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartKeyPointComponent } from './chart-key-point.component';

describe('ChartKeyPointComponent', () => {
  let component: ChartKeyPointComponent;
  let fixture: ComponentFixture<ChartKeyPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartKeyPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartKeyPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

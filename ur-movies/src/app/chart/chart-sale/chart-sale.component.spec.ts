import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSaleComponent } from './chart-sale.component';

describe('ChartSaleComponent', () => {
  let component: ChartSaleComponent;
  let fixture: ComponentFixture<ChartSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

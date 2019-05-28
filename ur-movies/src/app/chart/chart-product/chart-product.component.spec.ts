import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartProductComponent } from './chart-product.component';

describe('ChartProductComponent', () => {
  let component: ChartProductComponent;
  let fixture: ComponentFixture<ChartProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingDetailComponent } from './advertising-detail.component';

describe('AdvertisingDetailComponent', () => {
  let component: AdvertisingDetailComponent;
  let fixture: ComponentFixture<AdvertisingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisingDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingListComponent } from './advertising-list.component';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule, MatTableModule, MatInputModule } from '@angular/material';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('AdvertisingListComponent', () => {
  let component: AdvertisingListComponent;
  let fixture: ComponentFixture<AdvertisingListComponent>;
  let router: Router;

  const routerMock = {
    navigateByUrl: () => { }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatTableModule,
        MatInputModule,
        HttpClientTestingModule
      ],
      declarations: [AdvertisingListComponent],
      providers: [
        { provide: Router, useValue: routerMock },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingListComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('createNew', () => {
    it('should navigate to advertisings/new', () => {
      const navigateByUrlSpyOn = spyOn(router, 'navigateByUrl');

      component.createNew();

      expect(navigateByUrlSpyOn).toHaveBeenCalledWith('advertisings/new');
    });
  });
});

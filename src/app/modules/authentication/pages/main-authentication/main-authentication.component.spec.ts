import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAuthenticationComponent } from './main-authentication.component';

describe('MainAuthenticationComponent', () => {
  let component: MainAuthenticationComponent;
  let fixture: ComponentFixture<MainAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAuthenticationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

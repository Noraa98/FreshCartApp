import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegestration } from './user-regestration';

describe('UserRegestration', () => {
  let component: UserRegestration;
  let fixture: ComponentFixture<UserRegestration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRegestration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegestration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

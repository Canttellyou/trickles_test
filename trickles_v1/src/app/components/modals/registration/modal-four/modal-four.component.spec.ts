import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFourComponent } from './modal-four.component';

describe('ModalFourComponent', () => {
  let component: ModalFourComponent;
  let fixture: ComponentFixture<ModalFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

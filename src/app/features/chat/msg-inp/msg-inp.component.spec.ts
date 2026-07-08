import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgInpComponent } from './msg-inp.component';

describe('MsgInpComponent', () => {
  let component: MsgInpComponent;
  let fixture: ComponentFixture<MsgInpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsgInpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MsgInpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

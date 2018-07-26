import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItvComponent } from './itv.component';

describe('ItvComponent', () => {
  let component: ItvComponent;
  let fixture: ComponentFixture<ItvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

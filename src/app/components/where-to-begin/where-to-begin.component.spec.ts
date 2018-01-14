import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereToBeginComponent } from './where-to-begin.component';

describe('WhereToBeginComponent', () => {
  let component: WhereToBeginComponent;
  let fixture: ComponentFixture<WhereToBeginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereToBeginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereToBeginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

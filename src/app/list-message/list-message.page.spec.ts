import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMessagePage } from './list-message.page';

describe('ListMessagePage', () => {
  let component: ListMessagePage;
  let fixture: ComponentFixture<ListMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMessagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

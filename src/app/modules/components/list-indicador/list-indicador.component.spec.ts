import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIndicadorComponent } from './list-indicador.component';

describe('ListIndicadorComponent', () => {
  let component: ListIndicadorComponent;
  let fixture: ComponentFixture<ListIndicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIndicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIndicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPerformerComponent } from './details-performer.component';

describe('DetailsPerformerComponent', () => {
  let component: DetailsPerformerComponent;
  let fixture: ComponentFixture<DetailsPerformerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPerformerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPerformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

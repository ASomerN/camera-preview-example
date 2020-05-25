import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { NewPicturePage } from './new-picture.page';

describe('NewPicturePage', () => {
  let component: NewPicturePage;
  let fixture: ComponentFixture<NewPicturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPicturePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewPicturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

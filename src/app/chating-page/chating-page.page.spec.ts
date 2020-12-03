import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatingPagePage } from './chating-page.page';

describe('ChatingPagePage', () => {
  let component: ChatingPagePage;
  let fixture: ComponentFixture<ChatingPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatingPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatingPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

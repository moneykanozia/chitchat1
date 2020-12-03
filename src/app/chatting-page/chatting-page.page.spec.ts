import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChattingPagePage } from './chatting-page.page';

describe('ChattingPagePage', () => {
  let component: ChattingPagePage;
  let fixture: ComponentFixture<ChattingPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChattingPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChattingPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatUsersPage } from './chat-users.page';

describe('ChatUsersPage', () => {
  let component: ChatUsersPage;
  let fixture: ComponentFixture<ChatUsersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatUsersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

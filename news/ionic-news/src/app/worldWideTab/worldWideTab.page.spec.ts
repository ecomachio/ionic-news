import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorldWideTabPage } from './worldwideTab.page';

describe('WorldWideTabPage', () => {
  let component: WorldWideTabPage;
  let fixture: ComponentFixture<WorldWideTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorldWideTabPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorldWideTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

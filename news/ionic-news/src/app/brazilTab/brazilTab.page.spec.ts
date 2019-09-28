import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrazilTabPage } from './brazilTab.page';

describe('BrazilTabPage', () => {
  let component: BrazilTabPage;
  let fixture: ComponentFixture<BrazilTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrazilTabPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrazilTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

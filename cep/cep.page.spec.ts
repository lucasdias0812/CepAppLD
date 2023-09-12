import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CepPage } from './cep.page';

describe('CepPage', () => {
  let component: CepPage;
  let fixture: ComponentFixture<CepPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed, async } from '@angular/core/testing'
import { Component } from '@angular/core'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockTableComponent,
        MockModalComponent
      ],
    }).compileComponents()
  }))

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
  
  it(`should have as title 'movies-bucket'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('Movies bucket')
  }))
  
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Movies bucket!')
  }))
})

@Component({
  selector: 'movie-table',
  template: ''
})
class MockTableComponent {
}

@Component({
  selector: 'movie-modal',
  template: ''
})
class MockModalComponent {
}

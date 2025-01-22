import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  inputText = '';
  currentNum = 0;
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }
  countWords(value: String) {
    this.currentNum = value.length;
  }
  clearText(event: any) {
  if (event.key === 'Escape') {
      event.target.value = '';
    this.inputText = '';
    this.currentNum = 0;
    }
  }
}


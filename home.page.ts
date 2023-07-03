import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  display: string = '';
  @ViewChild('total') total: ElementRef;
  symbol(symbol: string) {
    this.display += symbol;
  }
  erase() {
    this.display = '';
  }

  calculation() {
    // ここで計算処理を実行するなどのロジックを追加
  }

  constructor() {}
}

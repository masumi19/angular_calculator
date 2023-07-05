import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('total') public total: ElementRef;

  public display: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  symbol(symbol: string) {
    this.display += symbol;
  }

  erase() {
    this.display = '';
  }

  calculation() {
    this.display = eval(this.display);
  }

}

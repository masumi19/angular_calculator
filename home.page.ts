import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {IonButton, IonInput} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('total') public total: {
    el: IonInput
  };

  constructor() {}
  ngOnInit() {}
　
//記号の表示
  symbol(symbol: string) {
    const display = this.total.el.value;
    this.total.el.value = display + symbol;
  }

  //消去の表示
  erase(){
    this.total.el.value = '';
  }

  //合計の表示
  calculation() {
    const formula = this.total.el.value;
    this.total.el.value = formula;
  console.log(this.total.el.value)
  }

}

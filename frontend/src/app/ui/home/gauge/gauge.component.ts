import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class GaugeComponent implements OnInit {



  @Input()
  color:string = '#ff6939'

  @Input()
  gaugeValue: string = '0';
  

  @Input()
  label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

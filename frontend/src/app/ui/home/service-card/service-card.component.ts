import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {



  @Input()
  description: string = '';


  @Input()
  title: string = '';


  @Input()
  imgSrc: string;


  @Input()
  href:string = '#';

  constructor() { }

  ngOnInit(): void {
  }

}

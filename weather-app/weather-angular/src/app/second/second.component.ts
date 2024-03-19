import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  sharedData: any;
  constructor(public service:ServiceService){}
  
  ngOnInit() {
    this.service.sharedData$
      .subscribe(sharedData => this.sharedData = sharedData);
      
      
  }
  display(){
    console.log(this.sharedData+"vbnm");
  }

}

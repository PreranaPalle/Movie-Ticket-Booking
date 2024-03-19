import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  data = 'Initial Datammmm';
  sharedData!: string;
  constructor(public service: ServiceService) {
  }

  // ngOnInit() {
  //   this.service.sharedData$
  //     .subscribe(sharedData => this.sharedData = sharedData);
  // }
  updateData() {
    this.service.setData(this.data);
    
  }

}

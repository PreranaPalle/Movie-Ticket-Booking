import { Component } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-into',
  templateUrl: './into.component.html',
  styleUrls: ['./into.component.css']
})
export class IntoComponent {
  value: any[] = [];
  checked:boolean=false;
  hours = new Date(new Date().getTime()).getHours();
  state = (this.hours < 12 ? 'Morning' : this.hours< 18 ? 'Afternoon' : 'Evening');
  public cityModel: any;


  constructor(private weatherservice : WeatherServiceService){
  }
  onClick(){
    this.weatherservice.getPosts(this.cityModel,this.state).subscribe((data:any[])=>{this.value=data});
    console.log(this.hours+" "+this.state)
  }

}

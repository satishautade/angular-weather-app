import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor() {
    this.current = {
      city: 'Pune',
      country: 'India',
      date: new Date(),
      image: 'assets/img/sunny_black.svg',
      temperature: 72,
      description: 'Sunny',
    } as ICurrentWeather
   }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { ICurrentWeather } from '../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Just to represent data from API
// Not exported because its used privately by weather service only

interface ICurrentWeatherData {
  weather: [{
        description: string,
        icon: string
    }],
  main:{
    temp: number
  },
  sys:{
    country: string
  },
  dt: number,
  name: string
}

export interface IWeatherService{
  getCurrentWeather(city:string, country: string): Observable<ICurrentWeather>;
}

@Injectable({
  providedIn: 'root'
})

export class WeatherService implements IWeatherService{

  constructor(private httpClient:HttpClient) {  }

  getCurrentWeather(city:string, country:string): Observable<ICurrentWeather>{
    return this.httpClient.get<ICurrentWeatherData>(
      `${environment.baseUrl}?`+
      `q=${city},${country}&appid=${environment.appId}&units=metric`
    ).pipe(
      map( data => this.transformToICurrentWeather(data) )
    )
  }

  private transformToICurrentWeather(data: ICurrentWeatherData){
    return{
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      // temperature: this.convertKelvinToFahrenheit(data.main.temp),
      temperature: data.main.temp,
      description: data.weather[0].description
    }
  }

  private convertKelvinToFahrenheit(kelvin:number):number{
    return kelvin * 9/5 - 459.67
  }
}

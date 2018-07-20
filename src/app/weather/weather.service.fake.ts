import { IWeatherService } from "./weather.service";
import { ICurrentWeather } from "../interfaces";
import { Observable, of } from "rxjs";

export class WeatherServiceFake implements IWeatherService{

    private fakeWeather: ICurrentWeather = {
        city: 'Mumbai',
        country: 'IN',
        date: 1485789600,
        image: '',
        temperature: 290,
        description: 'ligh rain'
    }

    public getCurrentWeather(city:string, country:string): Observable<ICurrentWeather>{
        return of(this.fakeWeather);
    }
}
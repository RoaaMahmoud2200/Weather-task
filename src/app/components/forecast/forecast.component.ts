import { Component, OnInit } from '@angular/core';
import { ApiWeatherService } from '../../services/api-weather.service';
import { ICity } from '../../models/icity';
import { CommonModule } from '@angular/common';
import { IForecast } from '../../models/iforecast';
import { ICityDOM } from '../../models/icity-dom';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css'
})
export class ForecastComponent implements OnInit {
citiesWeather= [] as ICity[]
FilteredArray= [] as ICityDOM[]
  constructor(private _apiWeatherService:ApiWeatherService){


  }

  ngOnInit(): void {
      this._apiWeatherService.getAllCitiesForecast().subscribe(
        {
          next:(res)=>{this.citiesWeather=res;
            this.GenerateCitiesWithLeatestDateEle(this.citiesWeather)},
          error :(err)=>{}
        })

  }

  GenerateCitiesWithLeatestDateEle(ICities: ICity[]): ICityDOM[] {
    this.FilteredArray = [];
    ICities.forEach(city => {
     const latestForecast = this.getLatestForecast(city.forecast);
     const cityDOM: ICityDOM = {
      id: city.id,
      city: city.city,
      forecast: latestForecast,
    };
     this.FilteredArray.push(cityDOM)

     })

 return this.FilteredArray ;

   };




   getLatestForecast(forecastArray: IForecast[]): IForecast {
    return forecastArray.reduce((latest, current) => {
      // Convert dates to Date objects and compare
      return new Date(current.date) > new Date(latest.date) ? current : latest;
    });

}



}


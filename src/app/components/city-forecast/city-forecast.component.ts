import { Component, OnInit } from '@angular/core';
import { ApiWeatherService } from '../../services/api-weather.service';
import { ICity } from '../../models/icity';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-city-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-forecast.component.html',
  styleUrl: './city-forecast.component.css'
})
export class CityForecastComponent implements OnInit {
 forecastData?:ICity
 cityId:number=0

  constructor(private _apiWeatherService:ApiWeatherService,
    private _activatedRoute:ActivatedRoute){

  }
    ngOnInit(): void {
      this._activatedRoute.paramMap.subscribe((paramMap) => {
        this.cityId =Number(paramMap.get('cityId'))  // Get the 'id' from the query parameters
        this._apiWeatherService.getForecast(this.cityId).subscribe(
          {
            next:(res)=>{this.forecastData=res; console.log(this.forecastData) },
            error :(err)=>{console.log(err)}
       });
      });




}
  }

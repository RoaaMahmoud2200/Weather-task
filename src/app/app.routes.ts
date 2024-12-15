import { Routes } from '@angular/router';
import { CityForecastComponent } from './components/city-forecast/city-forecast.component';
import { ForecastComponent } from './components/forecast/forecast.component';

export const routes: Routes = [

  {path:"forecast",component:ForecastComponent},
  {path:"cityForecast/:cityId",component:CityForecastComponent},
  {path:"**",component:ForecastComponent}

];

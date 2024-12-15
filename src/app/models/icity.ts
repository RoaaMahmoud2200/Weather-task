import { IForecast } from "./iforecast";

export interface ICity {
  id:number;
  city:string;
  forecast:IForecast[]
}

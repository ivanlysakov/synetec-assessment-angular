import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { CitiesEndpoint } from "./cities-endpoint.service";
import { ICity } from "../../models/city.model";
import { Observable } from 'rxjs/Observable';

@Injectable()

export class CitiesService {
  constructor(
    private _citiesEndpoint: CitiesEndpoint,
    private httpClient: HttpClient) {

  }

  public getList(): Observable<ICity[]> {
    return this._citiesEndpoint.get();
  }

  // delete metod on backend implemented incorectly
  // for fix this need to change: 

  // public void Delete(City cityToDelete)
  // {
  //     CityInfoContext.Cities.ToList().Remove(cityToDelete);
  // }
  
  // public void Delete(City cityToDelete)
  // {
  //     CityInfoContext.Cities.Remove(cityToDelete);
  // }

  deleteCity(id: any) {
    return this._citiesEndpoint.delete(id)
  }
}



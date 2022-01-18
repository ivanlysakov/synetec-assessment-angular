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

  deleteCity(id: any) {
    return this._citiesEndpoint.delete(id)
  }
}



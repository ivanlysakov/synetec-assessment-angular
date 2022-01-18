import { Injectable, Injector } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BaseService } from "../base.service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { ICity } from "../../models/city.model";
import { catchError, retry } from "rxjs/operators";
import { _throw as throwError } from 'rxjs/observable/throw';

@Injectable()
export class CitiesEndpoint extends BaseService {

    constructor(private _httpClient: HttpClient, private _injector: Injector) {
        super(_httpClient, _injector);
    }

    get(): Observable<ICity[]> {
        let url_ = this.getBaseUrl() + "api/Cities";
        return this._httpClient.get<ICity[]>(url_, this.getRequestHeaders()).pipe(
            retry(1),
            catchError(this.httpError)
        )
    }

    delete(id: any) {
        let url = this.getBaseUrl() + "api/Cities/delete-city/" + id;
        return this._httpClient.delete<ICity>(url, this.getRequestHeaders()).pipe(
            retry(1),
            catchError(this.httpError)
        )
    }
    
    httpError(error) {
        let msg = '';
        if (error.error instanceof ErrorEvent) {
            msg = error.error.message;
        } else {
            msg = `Error: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(msg);
        return throwError(() => msg);
    }
}
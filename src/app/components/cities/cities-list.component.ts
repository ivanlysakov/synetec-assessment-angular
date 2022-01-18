import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesService } from "../../services/cities/cities.service";

@Component ({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit{

    cities: ICity[];
    constructor(private citiesService: CitiesService) {}

    ngOnInit(): void {
         this.getCities()
    }

    getCities(){
        this.citiesService.getList().subscribe((response: ICity[])=>{
            this.cities = response;
        });
    }

    delete(id: any){
        this.citiesService.deleteCity(id).subscribe(response=>{
            this.getCities()
        });
    }

    

}
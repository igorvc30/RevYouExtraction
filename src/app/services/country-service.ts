import { Injectable } from "@angular/core";
import { of } from 'rxjs/observable/of';
import { RestRepositoryService } from "./rest-repository-service";
import { Country } from "../models/country";

@Injectable()
export class CountryService {

    constructor(private restRepositoryService : RestRepositoryService){

    }

    getAllCountries(){
        return this.restRepositoryService.get("institutions/countries","").map(countriesResponse => {
            var countries = [] as [Country]
            var countriesResponseAsArray = countriesResponse as Array<any>;
            countriesResponseAsArray.forEach(element => {
                var country = new Country();
                country.id = element.idCountry;
                country.name = element.nmCountry;
                countries.push(country);
            });
            return countries;
        })
         
      }

}

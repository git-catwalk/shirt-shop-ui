import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Manufacturer}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class ManufacturerService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Manufacturer>> {
        let url:string = this.config.api + "/rest/manufacturer/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Manufacturer>>(url, {params});
    }

    list():Observable<Array<Manufacturer>> {
        return this.http.get<Array<Manufacturer>>(this.config.api + "/rest/manufacturer");
    }

    save(model: Manufacturer):Observable<Manufacturer>{
        return this.http.post<Manufacturer>(this.config.api + "/rest/manufacturer", model);
    }

    getById(id: string):Observable<Manufacturer> {
        return this.http.get<Manufacturer>(this.config.api + "/rest/manufacturer/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/manufacturer/" + id);
    }
}

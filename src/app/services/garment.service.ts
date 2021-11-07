import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Garment}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class GarmentService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Garment>> {
        let url:string = this.config.api + "/rest/garment/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Garment>>(url, {params});
    }

    list():Observable<Array<Garment>> {
        return this.http.get<Array<Garment>>(this.config.api + "/rest/garment");
    }

    save(model: Garment):Observable<Garment>{
        return this.http.post<Garment>(this.config.api + "/rest/garment", model);
    }

    getById(id: string):Observable<Garment> {
        return this.http.get<Garment>(this.config.api + "/rest/garment/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/garment/" + id);
    }
}

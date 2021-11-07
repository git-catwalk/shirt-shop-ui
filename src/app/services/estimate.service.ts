import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Estimate}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class EstimateService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Estimate>> {
        let url:string = this.config.api + "/rest/estimate/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Estimate>>(url, {params});
    }

    list():Observable<Array<Estimate>> {
        return this.http.get<Array<Estimate>>(this.config.api + "/rest/estimate");
    }

    save(model: Estimate):Observable<Estimate>{
        return this.http.post<Estimate>(this.config.api + "/rest/estimate", model);
    }

    getById(id: string):Observable<Estimate> {
        return this.http.get<Estimate>(this.config.api + "/rest/estimate/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/estimate/" + id);
    }
}

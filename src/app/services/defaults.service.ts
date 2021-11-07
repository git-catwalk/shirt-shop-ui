import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Defaults}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class DefaultsService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Defaults>> {
        let url:string = this.config.api + "/rest/defaults/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Defaults>>(url, {params});
    }

    list():Observable<Array<Defaults>> {
        return this.http.get<Array<Defaults>>(this.config.api + "/rest/defaults");
    }

    save(model: Defaults):Observable<Defaults>{
        return this.http.post<Defaults>(this.config.api + "/rest/defaults", model);
    }

    getById(id: string):Observable<Defaults> {
        return this.http.get<Defaults>(this.config.api + "/rest/defaults/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/defaults/" + id);
    }
}

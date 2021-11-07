import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Settings}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class SettingsService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Settings>> {
        let url:string = this.config.api + "/rest/settings/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Settings>>(url, {params});
    }

    list():Observable<Array<Settings>> {
        return this.http.get<Array<Settings>>(this.config.api + "/rest/settings");
    }

    save(model: Settings):Observable<Settings>{
        return this.http.post<Settings>(this.config.api + "/rest/settings", model);
    }

    getById(id: string):Observable<Settings> {
        return this.http.get<Settings>(this.config.api + "/rest/settings/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/settings/" + id);
    }
}

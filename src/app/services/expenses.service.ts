import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Expenses}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class ExpensesService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Expenses>> {
        let url:string = this.config.api + "/rest/expenses/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Expenses>>(url, {params});
    }

    list():Observable<Array<Expenses>> {
        return this.http.get<Array<Expenses>>(this.config.api + "/rest/expenses");
    }

    save(model: Expenses):Observable<Expenses>{
        return this.http.post<Expenses>(this.config.api + "/rest/expenses", model);
    }

    getById(id: string):Observable<Expenses> {
        return this.http.get<Expenses>(this.config.api + "/rest/expenses/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/expenses/" + id);
    }
}

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {Customer}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class CustomerService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<Customer>> {
        let url:string = this.config.api + "/rest/customer/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<Customer>>(url, {params});
    }

    list():Observable<Array<Customer>> {
        return this.http.get<Array<Customer>>(this.config.api + "/rest/customer");
    }

    save(model: Customer):Observable<Customer>{
        return this.http.post<Customer>(this.config.api + "/rest/customer", model);
    }

    getById(id: string):Observable<Customer> {
        return this.http.get<Customer>(this.config.api + "/rest/customer/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/customer/" + id);
    }
}

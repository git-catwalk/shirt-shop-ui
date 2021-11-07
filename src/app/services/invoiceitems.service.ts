import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Config} from "./config";
import {Observable} from "rxjs";
import  {InvoiceItems}  from "./app-model";
import {Page} from "./page";

@Injectable()
export class InvoiceItemsService {
    constructor(public http: HttpClient,public config:Config ) { }

    search(term:string = '',page:number = 0,limit:number = 50):Observable<Page<InvoiceItems>> {
        let url:string = this.config.api + "/rest/invoiceItems/search";
        const params = new HttpParams()
        .set('page', String(page))
        .set('term',term)
        .set('limit',limit);
        return this.http.get<Page<InvoiceItems>>(url, {params});
    }

    list():Observable<Array<InvoiceItems>> {
        return this.http.get<Array<InvoiceItems>>(this.config.api + "/rest/invoiceItems");
    }

    save(model: InvoiceItems):Observable<InvoiceItems>{
        return this.http.post<InvoiceItems>(this.config.api + "/rest/invoiceItems", model);
    }

    getById(id: string):Observable<InvoiceItems> {
        return this.http.get<InvoiceItems>(this.config.api + "/rest/invoiceItems/" + id);
    }

    removeById(id: string | null):Observable<any>{
        return this.http.delete<any>(this.config.api + "/rest/invoiceItems/" + id);
    }
}

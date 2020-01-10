import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Product } from "./product.model";
import { Order } from "./order.model";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";

class Token {
  public token: string;
  public success: boolean;
}

@Injectable()
export class RestDataSource {
    public Http: HttpClient;
    public baseUrl: string;
  public products: Product[] = [];
  auth_token: string;
    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.Http = http;
        this.baseUrl = baseUrl;
        //this.products = this.Http.get<Product[]>(this.baseUrl + 'api/Product/GetProducts/');
  };

  authenticate(user: string, pass: string): Observable<boolean> {
    let postData = {
      'name': user,
      'password': pass
    };
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.Http.request("POST", this.baseUrl + "api/Admin/login", { body: postData })
      .pipe(map(result => {
        let r = result as any;
        console.log(r.success);
        setTimeout(() => { }, 3000);
        this.auth_token = r.success ? r.token : null;
        var retval = this.auth_token != null ? Observable.create(true) : null;
        return retval
      }));
    }

    getProducts(): Observable<Product[]> {
        return this.Http.get<Product[]>(this.baseUrl + 'api/Product/GetProducts/');
    }

    saveOrder(order: Order): Observable<Order> {
        return from([order]);
  }

  saveProduct(product: Product): Observable<Product> {
    let postData = {
      "product": product
    };
    return this.Http.request("POST", this.baseUrl + "api/Product/addProduct", { body: postData }) as Observable<Product>;
  }

  updateProduct(product): Observable<Product> {
    let postData = {
      "product": product
    };
    return this.Http.request("PUT", this.baseUrl + "api/Product/updateProduct", { body: postData }) as Observable<Product>;
  }

  deleteProduct(id: number): Observable<Product> {
    let postData = {
      "id": id
    };
    return this.Http.request("DELETE", this.baseUrl + "api/Product/deleteProduct", { body: postData }) as Observable<Product>;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private _http = inject(HttpClient);
  url: string = 'https://fakestoreapi.com/products';

  getAllProducts(): Observable<any>{
    return this._http.get<any>(this.url)
  }

  procesarProductos(data: any): any {
    return {
      titulo: data.title,
      precio: data.price,
      imagen: data.image
    };
  }


}
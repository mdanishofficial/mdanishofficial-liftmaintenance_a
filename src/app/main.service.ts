import { Injectable } from '@angular/core';
import { PCconfig } from './pcConfig';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }


  public getfaqs(): Observable<any> {
    const url = PCconfig.getPath() + '/faqs/getfaqs';
    return this.http
      .get(url)
      .pipe(
        map((response: any) => {
          return response;
        })
      )
  }

}

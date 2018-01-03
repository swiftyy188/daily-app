import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';




@Injectable()
export class DealService {

  constructor(private http: HttpClient) { }

  getDeals(){
    return this.http
      .get('/deal', {
        headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      })  		.pipe(
  		catchError(this.handleError)
  		);
  }

  popup(item){
  	alert("Yoou bought the " + item.name);
  }

  private handleError(err: HttpClient | any){
	console.error('an error occured', err);
	return Observable.throw(err.message ||  err);
  }
}


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';




@Injectable()
export class DealService {

  constructor(private http: HttpClient) { }

  getDeals(){
  	return this.http.get('/deal')
  		.pipe(
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


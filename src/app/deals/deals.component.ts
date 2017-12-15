import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
deals: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  	this.http.get('/deal').subscribe(data=>{
  		this.deals = data;
  	})
  }

}

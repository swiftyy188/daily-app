import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DealService } from '../deal.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
deals: any;
  constructor(private dealService: DealService) { }

  ngOnInit() {
  	this.dealService.getDeals().subscribe(data=>{
  		this.deals = data;
  	})
  }

}

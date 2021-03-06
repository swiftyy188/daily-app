import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DealService } from '../deal.service';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './../auth/auth.service';


@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
	dealsSub: Subscription;
	deals: any;
	error: any;
  constructor(private dealService: DealService, private authService: AuthService) { }

  ngOnInit() {
  	this.dealsSub = this.dealService.getDeals().subscribe(
  		data => this.deals = data,
  		err => this.error = err
  	);
  }
  ngOnDestroy(){
  	this.dealsSub.unsubscribe();
  }
  

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.sendGetRequest1().subscribe((data: any)=>{
      console.log(data);
      this.products.push(data);
    })
  }

}

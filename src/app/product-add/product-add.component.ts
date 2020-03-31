import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from "@angular/forms"
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  products = [];
  formData:any={}
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.apiService.sendGetRequest2().subscribe((data: any)=>{
    //   console.log(data);
    //   this.products.push(data);
    // })
  }
  addProduct(f:NgForm){
    this.apiService.sendGetRequest2(this.formData).subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
  }

}

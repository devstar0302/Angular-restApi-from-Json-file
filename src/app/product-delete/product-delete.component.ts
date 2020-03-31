import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  products = [];
  formData:any={}
  id :number
    constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.apiService.sendGetRequest2().subscribe((data: any)=>{
    //   console.log(data);
    //   this.products.push(data);
    // })
  }
  deleteProduct(f:NgForm){
    this.apiService.sendGetRequest3(this.id).subscribe(res=>{
      
      console.log(res)
    },err=>{
      console.log(err)
    })
  }


}

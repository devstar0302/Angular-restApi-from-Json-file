import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  products = [];
  formData:any={}
  id :number
    constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  selectProduct(id){
    this.apiService.sendGetRequest4(this.id).subscribe(res=>{
      this.formData = res
      console.log(res)
    },err=>{
      console.log(err)
    })
  }

  updateProduct(f:NgForm){
    this.apiService.sendGetRequest5(this.id, this.formData).subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })

  }

}

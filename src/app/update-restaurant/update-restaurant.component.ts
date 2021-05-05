import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  alert:boolean = false;
  editRestaurant= new FormGroup({
  Name: new FormControl(''),
  Address: new FormControl(''),
  Email: new FormControl('')
  })

  constructor(private resto:CommonService,private router:ActivatedRoute) { }
  
  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      this.editRestaurant= new FormGroup({
        Name: new FormControl(result['Name']),
        Address: new FormControl(result['Address']),
        Email: new FormControl(result['Email'])
  })
})
}
updateResto(){
  this.resto.updateResto(this.router.snapshot.params.id,this.editRestaurant.value)
  .subscribe((result)=>{console.log(result,"data updated successfully")
  this.alert=true;
})
}
closeAlert(){
  this.alert=false;
}
}


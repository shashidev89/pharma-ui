import { Component, OnInit } from '@angular/core';
import { PharmaService } from '../shared/pharma.service';
import { Router } from '@angular/router';
// import { AppRoutingModule, routingComponents } from './app.routing';
@Component({
  selector: 'app-pharma-delete',
  templateUrl: './pharma-delete.component.html',
  styleUrls: ['./pharma-delete.component.css']
})
export class PharmaDeleteComponent implements OnInit {

  data:Array<any>;

  constructor(private pharma:PharmaService,private router: Router) { }

  ngOnInit() {
    this.pharma.getService().subscribe((data) => {
      this.data=data;

       console.log(this.data);

    });
  }

  changeRoute(id){
    this.router.navigate(['./admin/update/'+id]);
  }
deleteUser(id){
  this.pharma.deleteUser(id).subscribe((data) => {
    // this.data=data;

    console.log(data);

  });
}


}

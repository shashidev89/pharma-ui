import { Component, OnInit } from '@angular/core';
import { PharmaService } from '../shared/pharma.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharma-shortagelist',
  templateUrl: './pharma-shortagelist.component.html',
  styleUrls: ['./pharma-shortagelist.component.css']
})
export class PharmaShortagelistComponent implements OnInit {

  data:Array<any>;
  flag:boolean=false;

  constructor(private pharma:PharmaService,private router: Router) { }

  ngOnInit() {
    this.pharma.getShortage().subscribe((data) => {
      this.data=data;

      console.log(this.data);

    });
  }
  changeRoute(id){
    this.router.navigate(['./shortage/update/'+id]);
  }
  deleteShortage(id){
    this.pharma.deleteShortage(id).subscribe((data) => {
      // this.data=data;

      console.log(data);

      if(data){
        location.reload();
        this.flag=true;
      }

    });
  }

}

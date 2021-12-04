import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
   public result:any;
   public show: boolean = true;
  constructor() { }

  ngOnInit(): void {

  }

  loadseriesResults(seriesInfo:any){
      this.result=seriesInfo;
      this.show=false;
  }

}

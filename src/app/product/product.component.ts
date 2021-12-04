import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ProductinfoService } from '../services/productinfo.service';
declare var $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { KeyboardClickDirective } from './keyboard-click.directive';
import { KeyboardService } from '../services/keyboard.service';
import { ProductInfoComponent } from '../productInfo/product-info.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  columns: number = 4;
  hide: boolean = true;
  el: any;
  @ViewChild(ProductInfoComponent, { static: true })
  eachSeriesInfo!: ProductInfoComponent;
  //@ViewChild(ProductInfoComponent, { static: false }) eachSeriesInfo: ProductInfoComponent = new ProductInfoComponent;
  @ViewChildren(KeyboardClickDirective)
  inputs!: QueryList<KeyboardClickDirective>;



  constructor(private productInfoService: ProductinfoService, private keyboardService: KeyboardService, private router: Router, private rd: Renderer2, private ref: ElementRef) { }
  public productDetails: any;

  ngOnInit(): void {
    this.productInfoService.getSeriesInfo().subscribe(response => {
      if (response.responseCode.statusCode === 200) {
        this.productDetails = response._embedded["viaplay:blocks"][0]._embedded["viaplay:products"];

        this.keyboardService.keyBoard.subscribe(response => {
          this.move(response);
        });

        $(document).ready(function () {
          $($("div#testVar")[0]).focus();
        });
      }

    });

  }




  loadSeriesInfo(eachResult: any) {
    this.eachSeriesInfo.loadseriesResults(eachResult);
    this.hide = false;
  }

  move(object: { element: ElementRef<any>; action: any; }) {
    const inputToArray = this.inputs.toArray()
    let index = inputToArray.findIndex(x => x.element == object.element);
    switch (object.action) {
      case "UP":
        index -= this.columns;
        break;
      case "DOWN":
        index += this.columns;
        break;
      case "LEFT":
        index--;
        break;
      case "RIGTH":
        index++;
        break;
      case "RIGTH":
        index++;
        break;
    }

    if (index >= 0 && index < this.inputs.length) {
      inputToArray[index].element.nativeElement.focus();
    }
  }

}

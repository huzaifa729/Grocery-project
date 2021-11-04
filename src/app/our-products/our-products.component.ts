import { Component, OnInit } from '@angular/core';
 import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.scss']
})
export class OurProductsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
   
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
  
    
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
   
    },
    // nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}


// navSpeed: 1200,
// navText: ['', ''],
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    navSpeed: 600,
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
    //  nav: true
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

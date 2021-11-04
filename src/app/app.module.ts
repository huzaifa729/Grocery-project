import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { ProductComponent } from './product/product.component';
import { OurProductsComponent } from './our-products/our-products.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    ProductComponent,
    OurProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

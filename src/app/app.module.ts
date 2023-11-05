import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarrComponent } from './navbarr/navbarr.component';
import { BodyComponent } from './body/body.component';
import { ProductcardsComponent } from './productcards/productcards.component';
import { CollectionsItemComponent } from './collections-item/collections-item.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarrComponent,
    BodyComponent,
    ProductcardsComponent,
    CollectionsItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

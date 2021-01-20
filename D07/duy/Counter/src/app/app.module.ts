import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';

import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemComponent } from './components/item/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ItemListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

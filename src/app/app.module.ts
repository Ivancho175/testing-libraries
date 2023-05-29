import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgxResponsiveDatatableModule } from 'ngx-responsive-datatable';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, NgxResponsiveDatatableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

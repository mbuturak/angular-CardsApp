import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CardFilterPipe } from './pipes/card-filter.pipe';
@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, AboutComponent, CardFilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: 'apiUrl',
      useValue: 'http://localhost:3000/',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

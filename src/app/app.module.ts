import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './componenets/contact/contact.component';
import { jwtInterceptorProvider } from 'projects/auth/src/lib/services/jwt-interceptor';
import { errorInterceptorProvider } from 'projects/auth/src/lib/services/error.interceptor';
import { AuthModule } from 'projects/auth/src/public-api';
import { HomeComponent } from './shared/home/home.component';
import { MasterComponent } from './shared/master/master.component';
import { TodoModule } from 'projects/todo/src/public-api';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    MasterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    AuthModule,
    TodoModule
  ],
  providers: [jwtInterceptorProvider, errorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

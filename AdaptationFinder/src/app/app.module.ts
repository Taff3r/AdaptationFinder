import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { HttpClientModule }    from '@angular/common/http';

=======
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
>>>>>>> 68282e1f54b867997a17380432cbbb5aa85dad1a
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDividerModule} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatgridComponent } from './matgrid/matgrid.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input'; 

@NgModule({
  declarations: [
    AppComponent,
    MatgridComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
=======
    BrowserAnimationsModule,
    MatDividerModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule
>>>>>>> 68282e1f54b867997a17380432cbbb5aa85dad1a
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

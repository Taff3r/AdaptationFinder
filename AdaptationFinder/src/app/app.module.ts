import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDividerModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input';
import { ListviewComponent } from './listview/listview.component';
import { CouplerComponent, CouplerInputComponent} from './coupler/coupler.component'; 
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BoovietableComponent } from './boovietable/boovietable.component';
import {MatCardModule} from '@angular/material/card'; 

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ListviewComponent,
    CouplerComponent,
    CouplerInputComponent,
    BoovietableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatBottomSheetModule,
    FormsModule,
    MatTableModule,
    MatCardModule
  ],
  entryComponents:[
    CouplerInputComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

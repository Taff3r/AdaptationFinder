import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDividerModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input';
import { ListviewComponent } from './listview/listview.component';
import { CouplerComponent, CouplerInputComponent} from './coupler/coupler.component'; 
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card'; 
import { MatRadioModule } from '@angular/material/radio'; 
import { MovietableComponent, MovietableInputComponent } from './movietable/movietable.component';
import { BooktableComponent, BooktableInputComponent } from './booktable/booktable.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ListviewComponent,
    CouplerComponent,
    CouplerInputComponent,
    MovietableComponent,
    MovietableInputComponent,
    BooktableComponent,
    BooktableInputComponent
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
    MatCardModule,
    MatDialogModule,
    MatRadioModule
  ],
  entryComponents:[
    CouplerInputComponent,
    BooktableInputComponent,
    MovietableInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

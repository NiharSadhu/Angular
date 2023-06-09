import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BoxListComponent } from './box-list/box-list.component';
import { RecipientColorDirective } from './recipient-color.directive';
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxListComponent,
    RecipientColorDirective,
    BoxComponent,
    FormsModule
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

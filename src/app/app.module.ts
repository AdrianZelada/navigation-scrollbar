import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationTestComponent } from './navigation-test/navigation-test.component';
import {NavigationScrollbarModule} from './navigation-scrollbar/navigation-scrollbar.module';
import { BlockOneComponent } from './block-one/block-one.component';
import { ContentTwoTestComponent } from './content-two-test/content-two-test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationTestComponent,
    BlockOneComponent,
    ContentTwoTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

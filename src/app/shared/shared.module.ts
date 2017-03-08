import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppHeader} from './app-header/app-header';
import {AppNav} from './app-nav/app-nav';
import {AppFooter} from './app-footer/app-footer';

/** What is this Module for?  Copied from Material.angular.io code **/
/** Is it for bulk import of little components to keep app.module tidy? **/

@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    BrowserModule,
    MaterialModule,
  ],
  declarations: [ AppHeader, AppNav, AppFooter ],
  exports: [ AppHeader, AppNav, AppFooter ],
  providers: [ ],
  entryComponents: [ ],
})
export class SharedModule {}

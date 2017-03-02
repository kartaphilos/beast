import { MaterialModule } from '@angular/material';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }	 from '@angular/http';

import { AppRoutingModule }	from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { AnimalsComponent } from './animals.component';
//import { AnimalDetailComponent } from './animal-detail.component';
import { AnimalService } from './animal.service';
//import { AnimalSearchComponent } from './animal-search.component';

//import {APP_BASE_HREF} from '@angular/common';


@NgModule({
  imports: [
      MaterialModule.forRoot(),
      BrowserModule,
      FormsModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      AppRoutingModule
  ],

  declarations: [
      AppComponent,
      AnimalsComponent
  //    AnimalDetailComponent,
  //    AnimalSearchComponent
  ],

  providers: [
  	AnimalService
	//,	{provide: APP_BASE_HREF, useValue : '/' }
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }

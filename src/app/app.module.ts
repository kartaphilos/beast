import { MaterialModule } from '@angular/material';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }	 from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }	from './app-routing.module';
import { BeastApp }  from './beast-app.component';
import { SharedModule } from './shared/shared.module';
import { AnimalModule } from './animal/animal.module';
import { AnimalService } from './animal/animal.service';

//import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  imports: [
      MaterialModule.forRoot(),
      BrowserModule,
      FormsModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      SharedModule,
      AnimalModule,
      AppRoutingModule
  ],
  declarations: [
      BeastApp,
    //  AnimalsComponent,
    //  AnimalDetailComponent
  //    AnimalSearchComponent
  ],
/* For dialogs
  entryComponents: [
    AnimalDetailComponent
  ],
  */
  providers: [
  	AnimalService
	//,	{provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [ BeastApp ]
})

export class AppModule { }

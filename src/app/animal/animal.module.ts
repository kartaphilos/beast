import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AnimalsComponent} from './animals.component';
import {AnimalDetailComponent} from './animal-detail.component';
//import {AnimalService} from './animal.service';

@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    BrowserModule,
    MaterialModule,
  ],
  declarations: [ AnimalsComponent, AnimalDetailComponent ],
  exports: [ AnimalsComponent, AnimalDetailComponent ],
  providers: [ ],
  entryComponents: [ ],
})
export class AnimalModule {}

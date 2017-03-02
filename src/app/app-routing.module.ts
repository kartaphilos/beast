import { NgModule }		from '@angular/core';
import { RouterModule, Routes }	from '@angular/router';


import { AnimalsComponent }	from './animals.component';
//import { AnimalDetailComponent }	from './animal-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/animals', pathMatch: 'full' },
//	{ path: 'detail/:id', component: AnimalDetailComponent },
	{ path: 'animals', component: AnimalsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}

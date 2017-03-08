import 'rxjs/add/operator/switchMap';
import { Component, OnInit }	from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }	from '@angular/common';
import {MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';

import { Animal }		from './animal';
import { AnimalService }	from './animal.service';

@Component({
  moduleId: module.id,
  selector: 'animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})

export class AnimalDetailComponent implements OnInit {
	animal: Animal;

	constructor(
	   private animalService: AnimalService,
	   private route: ActivatedRoute,
	   private location: Location,
     public dialogRef: MdDialogRef<AnimalDetailComponent>
	) {}


	ngOnInit(): void {
    this.route.params
	   .switchMap((params: Params) => this.animalService.getAnimal(+params['id']))
	   .subscribe(animal => this.animal = animal);
    // let config = dialogRef.
    // let animal = this.animalService.getAnimal(id);
  }

	goBack(): void {
		this.location.back();
	}

	save(): void {
		this.animalService.update(this.animal)
			.then(() => this.goBack());
	}
}

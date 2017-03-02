import { Component, OnInit }	from '@angular/core';
import { Router }		from '@angular/router';

import { Animal }			from './animal';
import { AnimalService }		from './animal.service';


@Component({
  moduleId: module.id,
  selector: 'my-animals',
  templateUrl: './animals.component.html',
  styleUrls: [ './animals.component.css' ]
})

export class AnimalsComponent implements OnInit {
	animals: Animal[];
	selectedAnimal: Animal;

	constructor(
		private router: Router,
		private animalService: AnimalService) { };

	getAnimals(): void {
		this.animalService.getAnimals()
			.then(animals => this.animals = animals);
	}

	ngOnInit(): void {
		this.getAnimals();
	}

	onSelect(animal: Animal): void {
   	   this.selectedAnimal = animal;
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedAnimal.id]);
	}

	add(name: string): void {
		name = name.trim();
		if (!name) { return; }
		this.animalService.create(name)
			.then(animal => {
				this.animals.push(animal);
				this.selectedAnimal = null;
			});
	}

	delete(animal: Animal): void {
		this.animalService
	 	 .delete(animal.id)
		 .then( () => {
		    this.animals = this.animals.filter(h => h !== animal);
		    if (this.selectedAnimal === animal) {
		    	this.selectedAnimal == null;
		    }
		});
	}
}

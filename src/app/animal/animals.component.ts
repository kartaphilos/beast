import { Component, OnInit }	 from '@angular/core';
import { Router }		from '@angular/router';
import {MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';

import { Animal }			from './animal';
import { AnimalService }		from './animal.service';
import { AnimalDetailComponent }		from './animal-detail.component';


@Component({
  moduleId: module.id,
  selector: 'animals-list',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})

export class AnimalsComponent implements OnInit {
  animals: Animal[];
  selectedAnimal: Animal;
  selectedDialogOption: string;

  constructor(
    private router: Router,
    private animalService: AnimalService,
    public animalDialog: MdDialog
  ) { };

/*
  openDialog() {
    let config = new MdDialogConfig().data(this.selectedAnimal.id);
    debugger;
    let dialogRef = this.animalDialog.open(AnimalDetailComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedDialogOption = result;
    });
  }
*/

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

  gotoDetail(animal: Animal): void {
    //this.openDialog();
    //this.selectedAnimal = animal;
    this.router.navigate(['/animaldetail', animal.id]);
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
  create(): void {
    this.router.navigate(['/animaldetail']);
  }

  delete(animal: Animal): void {
    this.animalService
      .delete(animal.id)
      .then(() => {
        this.animals = this.animals.filter(h => h !== animal);
        if (this.selectedAnimal === animal) {
          this.selectedAnimal == null;
        }
      });
  }
}

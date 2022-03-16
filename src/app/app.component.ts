import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiHandlerService} from "./api-service/api-handler.service";



interface HouseCaracter {
  name: string;
  alternate_names: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: Date;
  yearOfBirth: Date;
  wizard: string;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: any;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: any;
  alive: boolean;
  image: string;
}

interface Character {
  name: string;
  alternate_names: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: Date;
  yearOfBirth: Date;
  wizard: string;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: any;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: any;
  alive: boolean;
  image: string;
}

interface Solicitud {
  nombre: string;
  apellido: string;
  detalles: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //Variables
  formHouses: FormGroup;
  arrayHouses: HouseCaracter[] = [];
  character = false
  characterActivate: HouseCaracter;
  houseSearchActivate = '';
  filterTerm: string;
  filterCharacter: string;

  arrayCharacters: Character[] = [];

  soliciutdesActivate = false;
  newSolicitud: FormGroup;

  arraySolicitudes: Solicitud[] = [];

  arrayTeacher: Character[] = [];
  filterTeacher = '';

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiHandlerService) {
    this.formHouses = this.formBuilder.group({
      houseName: ['', Validators.required]
    });

    this.newSolicitud = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      detalles: ['', Validators.required],
      email: ['', Validators.required],
    })




  }

  ngOnInit(): void {
    this.apiService.getHouses('slytherin').subscribe((data: any)=>{
      this.arrayHouses = data;
      this.houseSearchActivate = 'slytherin';
    });

    this.apiService.getEstudents().subscribe((data: any) =>{
      this.arrayCharacters = data;
    });

    this.apiService.getTeacher().subscribe((data: any) => {
      this.arrayTeacher = data;
    })
  }


  searchHouse() {
    this.apiService.getHouses(this.formHouses.value.houseName).subscribe((data: any)=>{
      this.arrayHouses = data;
      this.houseSearchActivate = this.formHouses.value.houseName;
    })
  }

  showCharacter(item: any) {
    this.character = true
    this.characterActivate = item;
  }

  closeCharacter() {
    this.character = false
  }

  solicitudes() {
    this.soliciutdesActivate = true
  }

  closeSolicitudes() {
    this.soliciutdesActivate = false
  }

  newSolicitudes() {

    this.arraySolicitudes.push(this.newSolicitud.value)

    this.newSolicitud = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      detalles: ['', Validators.required],
      email: ['', Validators.required],
    })
  }
}



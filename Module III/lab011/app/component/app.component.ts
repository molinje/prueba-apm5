import { Component } from '@angular/core';
import { Student } from '../model/student';
import { Teacher } from '../model/teacher';



@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/school.html'
})
export class AppComponent {

	title: string = "School";
	selected_S: Student;
	students: Student[] = STUDENTS;
    selected_T: Student;
    teachers: Teacher[] = TEACHERS;

	onSelect_Student(student: Student) {
		this.selected_S = student;
	}

    onSelect_Teacher(student: Student) {
        this.selected_T = student;
    }
}

const STUDENTS: Student[] = [
    {
        id: 1,
        name: "Pablo",
        Clases: ["calculo","logica Mat", "programacion"],
        grade: "10"
        
    },
    {
        id: 10,
        name: "Oscar",
        Clases: ["Investigacion","logica Mat", "programacion"],
        grade: "09"
    },
    {
        id: 20,
        name: "Mauricio",
        Clases: ["Circuitos","logica Mat", "programacion"],
        grade: "08"
    }
];


const TEACHERS: Teacher[] = [
    {
        id: 30,
        name: "Alba",
        rooms: ["101","102", "103A"],
        studies: ["Postagrado Ing SW","ISO 20001"]
        
    },
    {
        id: 40,
        name: "Marcela",
        rooms: ["107","108", "109b"],
        studies: ["Seguridad Inform","Telecomunicaciones"]
    },
    {
        id: 50,
        name: "Ricardo",
        rooms: ["101","102", "103A"],
        studies: ["Postagrado Ing SW","ISO 20001"]
    }
];
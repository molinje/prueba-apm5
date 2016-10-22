"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var student_service_1 = require('../service/student.service');
var AppComponent = (function () {
    function AppComponent(studentService) {
        this.studentService = studentService;
        this.title = "Students";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentService.getStudents()
            .then(function (students) { return _this.students = students; })
            .catch(function (error) { return console.log(error); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/school.html'
        }), 
        __metadata('design:paramtypes', [student_service_1.StudentService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
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
];*/
var TEACHERS = [
    {
        id: 30,
        name: "Alba",
        rooms: ["101", "102", "103A"],
        studies: ["Postagrado Ing SW", "ISO 20001"]
    },
    {
        id: 40,
        name: "Marcela",
        rooms: ["107", "108", "109b"],
        studies: ["Seguridad Inform", "Telecomunicaciones"]
    },
    {
        id: 50,
        name: "Ricardo",
        rooms: ["101", "102", "103A"],
        studies: ["Postagrado Ing SW", "ISO 20001"]
    }
];
//# sourceMappingURL=app.component.js.map
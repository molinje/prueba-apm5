var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(nid, name, age) {
        this.nid = nid;
        this.name = name;
        this.age = age;
    }
    Person.prototype.setNid = function (nid) {
        this.nid = nid;
    };
    Person.prototype.getNid = function () {
        return this.nid;
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(nid, name, age, id, classes) {
        _super.call(this, nid, name, age);
        this.id = id;
        this.classes = classes;
    }
    Student.prototype.setClasses = function (classes) {
        this.classes = classes;
    };
    Student.prototype.getClasses = function () {
        return this.classes;
    };
    return Student;
}(Person));
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(nid, name, age, id, grade, classrom) {
        _super.call(this, nid, name, age);
        this.id = id;
        this.grade = grade;
        this.classrom = classrom;
    }
    return Teacher;
}(Person));
var person = new Person(11, 'Luis', 30);
var studen1 = new Student(1, 'Maria', 19, 23, ["Logica Mat", "programacion", "Calculo"]);
var teacher1 = new Teacher(2, 'Mario', 36, 5, ['10', '11'], [110, 111]);
var codigo = studen1.getNid();
console.log(codigo);
var clasStudent = studen1.getClasses();
console.log(clasStudent);

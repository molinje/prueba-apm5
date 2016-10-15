class Person{
	nid: number;
	name: string;
	age: number;

	constructor(nid: number, name: string, age: number){
		this.nid = nid;
		this.name = name;
		this.age = age;

	
	}

    setNid(nid: number): void{
		this.nid = nid;
	}

	getNid(): number{
		return this.nid;
	}
}


class Student extends Person{
	// si no se indica el tipo de encapsulamiento, queda publica
	id: number;
	classes: Array<string>;

	constructor(nid: number, name: string, age: number,id: number, classes: Array<string>){
		super(nid,name,age);
        this.id = id;
        this.classes = classes;

	}

    setClasses(classes: Array<string>): void{
		this.classes = classes;

	}

	getClasses(): Array<string>{
		return this.classes;
	}




}

class Teacher extends Person{
	id: number;
	grade: Array<string>;
	classrom: Array<number>;
	
	constructor(nid: number, name: string, age: number, id: number, grade:  Array<string>, classrom: Array<number>){
		super(nid,name,age);
		this.id = id;
		this.grade = grade;
		this.classrom = classrom;
	}
}



let person = new Person(11, 'Luis',30);
let studen1 = new Student(1,'Maria',19,23,["Logica Mat", "programacion", "Calculo"])
let teacher1 = new Teacher(2,'Mario',36,5,['10','11'],[110,111])

var codigo: number = studen1.getNid();
console.log(codigo);
var clasStudent:  Array<string> = studen1.getClasses();
console.log(clasStudent);



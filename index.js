
class Student{
    static count = 0
    constructor(name,age,phone,marks){
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.marks = marks;
        Student.countStudent()
    }
     setPlacementAge(minPlacementAge){
        return (marks)=>{
            if(this.marks >= 40 && this.age >=18){
                console.log(`${this.name} is eligible for placement `)
            }else{
                console.log(`${this.name} is not eligible for placement `)
            }
        }
     }
     static countStudent(){
        return (Student.count++)
    }
}
let ram = new Student("ram",18,786,99)
let shyam = new Student("shyam",18,786,75)
let sonu = new Student("sonu",18,786,84)
let monu = new Student("monu",18,786,35)
let chintu = new Student("chintu",18,786,29)
chintu.setPlacementAge(18)()
ram.setPlacementAge(18)()
shyam.setPlacementAge(18)()
monu.setPlacementAge(18)()
sonu.setPlacementAge(18)()
console.log(Student.countStudent())


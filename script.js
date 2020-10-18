class Student {
    constructor({name, age, dateOfbirth, gender, studentID, hobbies}) {
        this.name = name;
        this.age = age;
        this.dateOfbirth = dateOfbirth;
        this.gender = gender;
        this.studentID = studentID;
        this.hobbies = hobbies;
    }


    get studentName() {
       return `${this.name}`;
   }

    set studentName(sN) {
        if(/[A-Za-z]/.test(sN)) {
            this.name = sN;
        } else {
            throw Error(`Bad result`);
        }
    }
    
    
    set studentAge(sA) {
        if(!isNaN(sA)){
            this.age = sA;
        } else {
            throw Error(`Bad result`);
        }
    }

    
    set studentDateOfBirth(sDOB) {
        if(/[A-Za-z]/.test(sDOB)) {
            this.dateOfbirth = sDOB;
        } else {
            throw Error(`Bad result`);
        }
    }


    set studentGender(sG){
        switch(sG) {
            case "male":
                this.gender = sG;
                break;
            case "female":
                this.gender = sG;
                break;
            default:
                this.gender = "Not Valid!";
        }
    }


    set studentHobbies(newHobbies) {
        if(/[A-Za-z]/.test(newHobbies)) {
            this.hobbies.push(newHobbies);
        } else {
            throw Error(`Bad result`);
        }
   }

    set removeStudentHobbies(newHobbies){
        let hobbiesArray = [];
  
        for (let i = 0; i < this.hobbies.length; i++) {
            if(this.hobbies[i] !== newHobbies){
            hobbiesArray.push(this.hobbies[i]);
            }
        }
  
        this.hobbies = hobbiesArray
    }

    get hobbiesList(){
        return this.hobbies
    }

    
    getData() {
        alert(`Hi! My name is ${this.name}. I'm ${this.age} years old because I born in ${this.dateOfbirth}. I am a ${this.gender} with student ID of ${this.studentID}. And lastly, my hobbies are ${this.hobbies} .`)
    }
}



const studentA = new Student({
    name: "Raissa Desyandita Tedjomurti",
    age: 22,
    dateOfbirth: "December 13th 1997",
    gender: "Female",
    studentID: "00082020029",
    hobbies: ["traveling", "reading", "cooking", "browsing"]
})
console.log(studentA.getData())


const studentB = new Student({
    name: "Bella Wahmilyana Asril",
    age: 23,
    dateOfbirth: "April 15th 1997",
    gender: "Female",
    studentID: "GLINTS037",
    hobbies: ["reading", "watching"]
})
console.log(studentB.getData())



// /* Checking Text & Number Only */

// "Bad Result"
// studentB.studentName = 20-10-2020;
// "Success"
studentB.studentName = "BELLA";
console.log("new setName:")
console.log(studentB.name)

// "Bad Result"
// studentA.studentAge = "dua puluh lima";
// "Success"
studentA.studentAge = 25;
console.log("new setAge:")
console.log(studentA.age)

// "Bad Result"
// studentB.studentDateOfBirth = 05/04/1997;
// "Success"
studentB.studentDateOfBirth = "lima april sembilan tujuh";
console.log("new setDateOfBirth:")
console.log(studentB.dateOfbirth)

// "Bad Result"
// studentA.studentGender = ("WANITA").toLowerCase();
// "Success"
studentA.studentGender = ("fEmAlE").toLowerCase();
console.log("new setGender:")
console.log(studentA.gender)


// /* Adding Hobby */

studentB.studentHobbies = "eating";
console.log("Hobbies List Now: ")
  for(let i = 0; i < studentB.hobbiesList.length; i++){
    console.log(`${i+1}. ${studentB.hobbiesList[i]}`)
  }

// /* Removing Hobby */

studentB.removeStudentHobbies = "watching";
console.log("removeHobby, Hobbies List Now: ")
  for(let i = 0; i < studentB.hobbiesList.length; i++){
    console.log(`${i+1}. ${studentB.hobbiesList[i]}`)
  }

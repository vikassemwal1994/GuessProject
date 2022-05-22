
let phara = document.querySelector('container.p');
alert('working')

class person{
     
    constructor(name,surname,age,hobby){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.hobby = hobby;

        
    }
    informationMsg(){
        phara.textContent = this.name + ' ' + this.surname;
    }

    showMsg(){
        phara.textContent = (`hello+ ''+{this.name}`)
    }
}

let per = new person(swati,semwal,22,['reading','playing','skating']);
per.informationMsg();
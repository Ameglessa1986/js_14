function Electro(name) {
    this.power = 'power'
    this.name = name
}

Electro.prototype.turnOnOff = function (click) {
    this.statusOnOff
    if (click === 'On') {
        this.statusOnOff = 'On'
        console.log(`${this.name} включен(а)`)
    } else {
        this.statusOnOff = 'Off'
        console.log(`${this.name} выключен(а)`)
    }
}

function Electrical(name) {
    this.name = name
    this.category = 'Home technic'
}
Electrical.prototype = new Electro()

function Electronics(name) {
    this.name = name
    this.category = 'Fore food, Brain, Comfort'
}
Electronics.prototype = new Electro()


const lamp = new Electrical('Напольная лампа');
lamp.power = 30;
lamp.color= 'White';
lamp.changingColor = function () {
    console.log(`${this.name} Светит ярко-синим`)
};
const computer = new Electronics('Компьютер');
computer.power = 150;
computer.RAM = '20 GB';
computer.SaveScreenPiccher = function () {
   console.log('Картинка экрана сохранена')
};

const toster = new Electrical('Тостер');
toster.power = 25;
toster.color = 'Gold';
toster.finishBacking = function () {
    console.log(`${this.name} тост готов`)
};

lamp.turnOnOff('On');
computer.turnOnOff('On');
toster.turnOnOff('On');
console.log(`Общая мощьность ${lamp.power + computer.power + toster.power} Вт`);

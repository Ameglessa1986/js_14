class Electro {
  constructor(name) {
      this.power = 'power'
      this.name = name
  }
  
  turnOnOff(click) {
      this.statusOnOff
      if (click == 'On') {
          this.statusOnOff = 'On'
          console.log(`${this.name} включен(а)`)
      } else {
          this.statusOnOff = 'Off'
          console.log(`${this.name} выключен(а)`)
      }
  }
  }
  
  class Electrical extends Electro {
  constructor(name) {
     super(name);
      this.category = 'Home technic'
  }
  }
  
  class Electronics extends Electro {
  constructor(name) {
      super(name);
      this.category = 'Fore food, Brain, Comfort'
  }
  }
  
  const lamp = new Electrical('Напольная лампа');
  lamp.power = 25;
  lamp.Finish = 'White';
  lamp.changingColor = function () {
      console.log(`${this.name} Светит ярко-синим`)
  };
  const computer = new Electronics('Компьютер');
  computer.power = 150;
  computer.RAM = '20 GB';
  computer.saveScreenPiccher = function () {
      console.log('Картинка экрана сохранена')
  };
  
  const toster = new Electrical('Тостер');
  toster.power = 25;
  toster.color = 'Gold';
  toster.finishBacking = function () {
      console.log(`${this.name} Тост готов`)
  };
  
  lamp.turnOnOff('On');
  lamp.turnOnOff('Off');
  computer.turnOnOff('On');
  computer.turnOnOff('Off');
  toster.turnOnOff('On');
  toster.turnOnOff('Off');
  console.log(`Общая мощность ${lamp.power + computer.power + toster.power} Вт`);
  
function hasProperty(str, obj) {
  for (let key in obj) {
      if (key === str) {
          return true;
      }
      else {   
      return false;
}
}
}

const model1 = 'Hitashi';
const model2 = 'Miu';
const insideBox = {
  Miu: 20,
  color: 'green',
  isWorking: true

}

console.log(hasProperty(model1, insideBox));
console.log(hasProperty(model2, insideBox));


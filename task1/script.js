const model = {
    brand: 'Lenovo',
    price: 12000
}

const TV = Object.create(model);

console.log(TV);

TV.model = 'Philips';
TV.cash = 10000;

function getProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, ' ', obj[key]);
        }
    }
}

getProperties(TV);

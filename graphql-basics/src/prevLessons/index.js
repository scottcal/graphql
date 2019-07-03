import MyCurrentLocation,{ getGreeting,message, name } from './myModule';
import Addme, { subtract } from './math';

const x = 6;
const y = 5;

console.log(message);
console.log(name);
console.log(MyCurrentLocation+"hello");
console.log(getGreeting('Jessica'));
console.log(`${x}+${y}=${Addme(x,y)}`);
console.log(`${x}-${y}=${subtract(x,y)}`);
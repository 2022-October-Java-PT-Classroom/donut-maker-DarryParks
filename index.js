//uncomment when using DonutMaker.js
import DonutMaker from "./donut-Maker";
 let donut = new DonutMaker();

const addDonutButton = (document.querySelector('#donut'));
addDonutButton.innerText ='mmmmmmmmm doughnuts.... ahhhhhhh!';

// var donutCount = 0;
const donutCountHTML = (document.querySelector('#donut-count'))
//uncomment when using DonutMaker.js
donutCountHTML.innerText ="donut-count: " + donut.getDonutCount();
// donutCountHTML.innerText ="donut-count: " + donutCount;

addDonutButton.addEventListener("click", () => {
  updateDonut();
});

function updateDonut() {
  // DonutMaker.js
  donut.addDonut();
  donutCountHTML.innerText = "donut-count, " + donut.getDonutCount();
  // donutCount++;   
  // donutCountHTML.innerText ="donut-count: " + donutCount;
}

const autoClickerButton = (document.querySelector('#purchased-auto-clicker'));
autoClickerButton.innerText = 'purchase clicker';

let autoClickerCount = 0;
let autoClickerCost = 100;

const autoClickerCountHTML = (document.querySelector('#auto-clicker-count'));
autoClickerCountHTML.innerText = 'auto clicker count' + autoClickerCount;

const autoClickerCostHTML = (document.querySelector('#auto-clicker-cost'));
autoClickerCostHTML.innerText = 'auto clicker count' + autoClickerCost;
autoClickerButton.addEventListener("click", -subtractClickerCount )

function subtractClickerCount(){
  donut.subtractDonut();
  donutCountHTML.innerText = "donut-count,"

}




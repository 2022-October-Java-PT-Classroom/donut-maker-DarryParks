import DonutMaker  from "./donut-maker.js";

describe ("DonutMaker object", () => {
    test("Does donutMaker add one donut to count", () => { 
       const underTest = new DonutMaker(1);
        underTest.donutCounter();
        expect(underTest.donutCount).toEqual(2);
       });

       test("Does donutMaker retrieve the donut count", ()=> {
       const underTest = new DonutMaker(1);
        underTest.donutCounter();
        underTest.getDonutCount;
        expect(underTest.donutCount.toEqual(2));
       });

       test("Does retrieve an Auto Clicker count", () => { 
        const underTest = new DonutMaker(1, 100);

         underTest.autoClickerCount();
         expect(underTest.autoClickerCount).toEqual(100);
  });
}); 
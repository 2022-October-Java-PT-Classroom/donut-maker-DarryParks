class DonutMaker { 
    constructor(donutCount, autoClickerCount) {
        this.donutCount = donutCount;
        this.autoClickerCount = autoClickerCount;
    }

    donutCounter() {
        this.donutCount++;
     
    }

    getDonutCount() {
        return this.donutCount;
    }

    autoClickerCount() {
        return this.autoClickerCount++
    }

    getAutoClickerCount() {
        return this.autoClickerCount;

    }
}

export default DonutMaker;
$(document).ready(() => {

    let money = $('#money');
    let moneyPerSec = $('#moneyPerSec');
    let cash = 0;
    let cashPerSec = 0;
    let cashString;
    let cashPerSecString;
    let upgradesString;

    let upgrades = {
        worker: [0,5],
        machine: [0,50],
        bus: [0,600],
        factory: [0,2000],
        hugeFactory: [0, 5000],
        clickUpg: [1, 1000]
    }

    $('#cookie').on("click", () => {
        cash = cash + upgrades.clickUpg[0];
        money.html(cash);
    });

    $('#worker').on("click", () => {
        if ( cash >= upgrades.worker[1] ) {
            cash = cash - upgrades.worker[1];
            money.html(cash);
            upgrades.worker[0]++;
            upgrades.worker[1] = upgrades.worker[1] + upgrades.worker[0] * upgrades.worker[0];
            cashPerSec++;
            $('#moneyPerSec').html(cashPerSec);
            $('#workerAmount').html(upgrades.worker[0]);
            $('#workerPrice').html(upgrades.worker[1]);
        }
    });

    $('#machine').on("click", () => {
        if ( cash >= upgrades.machine[1] ) {
            cash = cash - upgrades.machine[1];
            money.html(cash);
            upgrades.machine[0]++;
            upgrades.machine[1] = upgrades.machine[1] + 3 * upgrades.machine[0] * upgrades.machine[0];
            cashPerSec = cashPerSec + 3;
            $('#moneyPerSec').html(cashPerSec);
            $('#machineAmount').html(upgrades.machine[0]);
            $('#machinePrice').html(upgrades.machine[1]);
        }
    });

    $('#bus').on("click", () => {
        if ( cash >= upgrades.bus[1] ) {
            cash = cash - upgrades.bus[1];
            money.html(cash);
            upgrades.bus[0]++;
            upgrades.bus[1] = upgrades.bus[1] + 5 * upgrades.bus[0] * upgrades.bus[0];
            cashPerSec = cashPerSec + 8;
            $('#moneyPerSec').html(cashPerSec);
            $('#busAmount').html(upgrades.bus[0]);
            $('#busPrice').html(upgrades.bus[1]);
        }
    });

    $('#factory').on("click", () => {
        if ( cash >= upgrades.factory[1] ) {
            cash = cash - upgrades.factory[1];
            money.html(cash);
            upgrades.factory[0]++;
            upgrades.factory[1] = upgrades.factory[1] + 8 * upgrades.factory[0] * upgrades.factory[0];
            cashPerSec = cashPerSec + 20;
            $('#moneyPerSec').html(cashPerSec);
            $('#factoryAmount').html(upgrades.factory[0]);
            $('#factoryPrice').html(upgrades.factory[1]);
        }
    });

    
    $('#hugeFactory').on("click", () => {
        if ( cash >= upgrades.hugeFactory[1] ) {
            cash = cash - upgrades.hugeFactory[1];
            money.html(cash);
            upgrades.hugeFactory[0]++;
            upgrades.hugeFactory[1] = upgrades.hugeFactory[1] + 11 * upgrades.hugeFactory[0] * upgrades.hugeFactory[0];
            cashPerSec = cashPerSec + 50;
            $('#moneyPerSec').html(cashPerSec);
            $('#hugeFactoryAmount').html(upgrades.hugeFactory[0]);
            $('#hugeFactoryPrice').html(upgrades.hugeFactory[1]);
        }
    });
    
    $('#clickUpg').on("click", () => {
        if ( cash >= upgrades.clickUpg[1] ) {
            cash = cash - upgrades.clickUpg[1];
            money.html(cash);
            upgrades.clickUpg[0] = upgrades.clickUpg[0] * 2;
            upgrades.clickUpg[1] = upgrades.clickUpg[1] + 16 * upgrades.clickUpg[0] * upgrades.clickUpg[0];
            $('#clickUpgAmount').html(upgrades.clickUpg[0]);
            $('#clickUpgPrice').html(upgrades.clickUpg[1]);
        }
    });

    function addCash() {
        cash = cash + cashPerSec;
        money.html(cash);
        console.log("dodano kaske");
    }

    setInterval(addCash,1000);

    // BUTTONS =============================================

    $('#save').on('click', () => {
        localStorage.setItem('upgrades', JSON.stringify(upgrades));
        localStorage.setItem('cash', JSON.stringify(cash));
        localStorage.setItem('cashPerSec', JSON.stringify(cashPerSec));
        console.log("saved");
    });

    $('#load').on('click', () => {
        cashString = localStorage.getItem('cash');
        cash = JSON.parse(cashString);
        cashPerSecString = localStorage.getItem('cashPerSec');
        cashPerSec = JSON.parse(cashPerSecString);
        upgradesString = localStorage.getItem('upgrades');
        upgrades = JSON.parse(upgradesString);

        money.html(cash);
        moneyPerSec.html(cashPerSec);

        $('#workerAmount').html(upgrades.worker[0]);
        $('#workerPrice').html(upgrades.worker[1]);
        $('#machineAmount').html(upgrades.machine[0]);
        $('#machinePrice').html(upgrades.machine[1]);
        $('#busAmount').html(upgrades.bus[0]);
        $('#busPrice').html(upgrades.bus[1]);
        $('#factoryAmount').html(upgrades.factory[0]);
        $('#factoryPrice').html(upgrades.factory[1]);
        $('#clickUpgAmount').html(upgrades.clickUpg[0]);
        $('#clickUpgPrice').html(upgrades.clickUpg[1]);

        console.log("Loaded");
    });

    $('#reset').on('click', () => {
        localStorage.clear();
        cash=0;
        cashPerSec=0;

        console.log("reseted");
    });

});
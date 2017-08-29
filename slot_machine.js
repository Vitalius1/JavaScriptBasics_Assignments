// First version of game where the player leaves only when he depleted all the money he had in the beginning
/*
function slotMachine(qstart) {
    console.log("I have", qstart, "coins in quarters. I think I will try the SLOT MACHINE and see if I can become rich :)");
    while (qstart > 0) {
        var pickNumber = (Math.floor(Math.random() * 100) + 1);
        var slotNumber = (Math.floor(Math.random() * 100) + 1);
        if (pickNumber === slotNumber) {
            var winning = (Math.floor(Math.random() * 50) + 51);
            qstart = qstart + winning;
            console.log("NICE!!! I have a match. I won", winning, "coins. Now I have", qstart, "coins. I am still in the play!!!")
        }
        else {
            qstart--;
        }
    }
    console.log("UPSsss!!! Now I have", qstart, "coins left :(");
}
slotMachine(100);
console.log("OOOHhhh NOO!!! I am broke :(. The lesson is that gambling is risky.");
*/
// Second version of game where the player has a minimum and a maximum which in case achieved he takes the money and leaves

function slotMachine(qstart, min, max) {
    console.log("I have", qstart, "coins in quarters. I think I will try the SLOT MACHINE and see if I can become rich :)");
    while (qstart > min && qstart < max) {
        var pickNumber = (Math.floor(Math.random() * 100) + 1);
        var slotNumber = (Math.floor(Math.random() * 100) + 1);
        console.log("I pick the number => " + pickNumber, "    The SLOT MACHINE picked => " + slotNumber, "  Now I have", qstart - 1, "coins left.");
        if (pickNumber === slotNumber) {
            var winning = (Math.floor(Math.random() * 50) + 51);
            qstart = qstart + winning;
            console.log("NICE!!! I have a match. I won", winning, "coins. Now I have", qstart, "coins. I am still in the play!!!")
        }
        else {
            qstart--;
        }
        if (qstart <= min) {
            console.log("UPSsss!!! Now I have", qstart, "coins left :(. I would better go home while I still have some money left");
        }
        else if (qstart >= max) {
            console.log("I think it is time to stop. At least I doubled the coins I had and now I have", qstart, "coins and would better leave now until my LUCK goes away :)");
        }
    }
}
slotMachine(100, 40, 200);
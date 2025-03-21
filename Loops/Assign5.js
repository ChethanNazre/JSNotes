//Write a javascript function that converts a given amount of money into coins of denominations (1, 2, 5, 10 and 25). [function convert_to_coins(amount) {...}]. You may choose to print the coin denominations used on the console. E.g. convert_to_coins(87) should print 25 25 25 10 2.

function convert_to_coins(amount)//[function convert_to_coins(amount) {...}]
 {
    //constants
    const denominations = [100, 50, 20, 10, 5, 2, 1];
    const result = [];
    //for-while loop
    for (let i = 0; i < denominations.length; i++) {
        while (amount >= denominations[i]) {
            amount -= denominations[i];     
            result.push(denominations[i]);
        }
    }
    console.log(result.join(" "));
}
convert_to_coins(23);
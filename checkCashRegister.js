/* checkCashRegister.js
Jacky Lui

input: price, cash, cash-in-drawer
do: calculate change in coin and bills from high to low, if not sufficient or not same as cid
output: return change or string

do:
get difference = cash - price
calculate total cid
if cid > difference: split difference function 
else if cid == difference: return "Closed"
else: "return insufficient funds"
}

americanMoney = [
    ["name": value;] // highest to lowest
    ...
]

cashInDrawer function:
    loop through cid:
        cidVal += cid[value] 

split difference function(change array, difference):
loop americanMoney array
    add extra value to cid to count frequencies
    remainder = difference
    if (remainder divide highest above zero):
        remainder = remainder modulus americanMoney[value]
        change.push[americanMoney[nameKey], floor(difference/americanMoney[value])]
*/

var americanMoney =[
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
]

function cashInDrawer(cid){
    var cidVal =0;
    for (var ii =0; ii < cid.length; ii++){
        cidVal += cid[ii][1];
    }
    // convert to integers to avoid floating point rounding problem
    cidVal = cidVal * 100/100;
    return cidVal;
}

function splitDifference(difference, cid){
    var change = [];
    var remainder = difference;
    // loop through all types of American money
    for (var ii =americanMoney.length-1; ii >=0 ; ii--){
        // if money type exists in cash drawer
        if (cid[ii][1] !== null) {
            cid[ii].push(Math.floor(cid[ii][1]/americanMoney[ii][1])); // get frequencies
            console.log("cid["+ii+"]"+cid[ii]);
            var numNotes = remainder/americanMoney[ii][1];
            console.log(remainder/americanMoney[ii][1]);
            if (numNotes > 1){
                if (numNotes > cid[ii][2]){
                    change.push([americanMoney[ii][0], americanMoney[ii][1]*cid[ii][2]]);
                    remainder = remainder-americanMoney[ii][1]*cid[ii][2];
                    console.log("too big" + remainder);
                } else{
                    if (ii == 0) change.push([americanMoney[ii][0], americanMoney[ii][1]*Math.ceil(remainder/americanMoney[ii][1])]);
                    else change.push([americanMoney[ii][0], americanMoney[ii][1]*Math.floor(remainder/americanMoney[ii][1])]);
                    remainder = remainder%americanMoney[ii][1];
                    console.log("enough" + remainder);
                }
            }
        }
    }
    return change;
}

function checkCashRegister(price, cash, cid) {
    // Here is your change, ma'am.
    var difference = cash - price;
    var cidVal = cashInDrawer(cid);
    if (cidVal > difference){
        //   split difference function
        var change = splitDifference(difference,cid);
        if (cashInDrawer(change) < difference) return "Insufficient Funds";
        return change;
    } 
    else if (cidVal == difference) return "Closed";
    else return "Insufficient Funds";
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

var output = checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(output);
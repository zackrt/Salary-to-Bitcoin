import { getUserBitcoin,UserDollars } from "./coindesk-service";
import { Amount } from "./index";

//not getting called yet!!
export function renderResults(UserDollars) {
    var UserDollars;
    $.get(getUserBitcoin);
    console.log("renderResults");
    console.log(Amount);
    $("#conversion-results").html(`${Amount.toString()}`);
}
// how to render results in 
import $ from 'jquery';
import { getUserBitcoin,UserDollars } from "./coindesk-service";

//not getting called yet!!
export function renderResults(Amount) {
    console.log("renderResults");
    console.log(Amount);
    $("#conversion-results").html(`${Amount.toString()}`);
}
// how to render results in 
// how to send Amount to Next page to display top 4 items they can buy with that much USD
import $ from 'jquery';
import { getUserBitcoin,UserDollars,getCurrentRate,valueOfBitcoin } from "./coindesk-service";
//takes Amount from 
export function renderResults(Amount) {
    let data;
    $("#conversion-results").html(`${Amount.toString()}`);
    //return rate of 1 btc in h2 span class "rate-btc"
    $(".rate-btc").html(`${data.bpi.USD.rate_float}`);
}

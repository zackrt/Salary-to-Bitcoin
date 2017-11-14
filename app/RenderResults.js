import { getUserBitcoin,UserDollars } from "./coindesk-service";

export function renderResults(UserDollars) {
    var UserDollars;
    $get.(getUserBitcoin)
    $("#conversion-results").append(`${UserDollars}`)
}
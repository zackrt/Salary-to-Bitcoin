import $ from 'jquery';
import { getCurrentRate, getUserBitcoin, convertAmountBTC } from "./coindesk-service";
import { renderResults } from './RenderResults';

$('form').submit((e) => {
    e.preventDefault();
    
    let y = getUserBitcoin();
    getCurrentRate().then((rate)=> {
        console.log("test");
        var Amount = convertAmountBTC(y, rate);
        console.log(Amount);

    });
    convertAmountBTC();
})

console.log('hello');
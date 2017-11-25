import $ from 'jquery';
import { getCurrentRate, getUserBitcoin, convertAmountBTC } from "./coindesk-service";
import { renderResults } from './RenderResults';
import { jobFormHandler } from './SalaryinBitcoin';

$('.bitcoin-convert').submit((e) => {
    e.preventDefault();
    
    let y = getUserBitcoin();
    getCurrentRate().then((rate)=> {
        console.log("test");
    
        var Amount = convertAmountBTC(y, rate);
        console.log(Amount);
        renderResults(Amount);
    });
    //convertAmountBTC(); redundant
})

console.log('hello');

$(() =>{
    
    jobFormHandler();
});
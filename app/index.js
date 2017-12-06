import $ from 'jquery';
import { getCurrentRate, getUserBitcoin, convertAmountBTC } from "./coindesk-service";
import { renderResults } from './RenderResults';
import { jobFormHandler } from './SalaryinBitcoin';



//On document ready, shows intro & start btn, then takes user input of amount of Bitcoin to US dollars, 
$(() =>{
    jobFormHandler();
    $('.bitcoin-convert').submit((e) => {
        e.preventDefault(); 
        let y = getUserBitcoin();
        console.log(getCurrentRate);
        getCurrentRate().then((rate)=> {
            console.log("test");
            var Amount = convertAmountBTC(y, rate);
            console.log(Amount);
            renderResults(Amount);
        });
        //convertAmountBTC(); redundant
    })
    $(".start").click(()=>{
        $(".intro").hide();
        $(".home-screen").show();
    })
});
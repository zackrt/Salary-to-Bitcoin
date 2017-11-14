import $ from 'jquery';
import { getCurrentRate, getUserBitcoin } from "./coindesk-service";

$('form').submit((e) => {
    e.preventDefault();
    getCurrentRate();
    getUserBitcoin();
})

console.log('hello');
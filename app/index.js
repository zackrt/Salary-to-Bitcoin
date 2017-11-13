import $ from 'jquery';
import { getCurrentRate } from "./coindesk-service";

$('form').submit((e) => {
    e.preventDefault();
    getCurrentRate();
    
})

console.log('hello');
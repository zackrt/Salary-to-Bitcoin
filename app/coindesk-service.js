import $ from 'jquery';


const Coindesk_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

export const getCurrentRate = () => {
  $.get(Coindesk_URL).then((data) => {
        console.log(data);
  });
};
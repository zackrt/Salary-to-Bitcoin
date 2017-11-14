import $ from 'jquery';


const Coindesk_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

export const getCurrentRate = () => {
  //Promise .get with parameter Coindesk URL with jQuery .then that accepts params (data)
  $.get(Coindesk_URL).then((data) => {
        console.log(data);
  });
};
export function getUserBitcoin() {
  //jQuery pull value from user amount value, in input box
  var UserBitcoin = $("#user-bitcoin-amount").val();
  console.log(UserBitcoin);
}
// creates a function that multiplies users input of BTC * current rate from CoinDesk
export function convertAmountBTC(UserBitcoin, getCurrentRate){
  var UserDollars = x;
  if (UserBitcoin = number) {
    UserBitcoin * rate.getCurrentRate = x;
    return UserDollars;
  }
  if (UserBitcoin != number) {
    return error;
  }
}
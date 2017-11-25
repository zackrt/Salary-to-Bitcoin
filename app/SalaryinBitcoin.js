import $ from 'jquery';

const url =
"https://api.usa.gov/jobs/search.json";
console.log($('#jobs-form'));

export const jobFormHandler = ()=> {
$('#jobs-form').submit((event) => {
  event.preventDefault();
  const query = $('#job-query').val();
  let rate = $("#conversion-results").text();
  console.log('original rate', rate);
  rate = Number(rate);
  $.getJSON(url, {
    query
  }).then(data => {
    console.log(data);
    console.log("Hello");
    //var govSalary = data;
    $('.salary-results').html("");
    for (const job of data) {
      console.log('rate', rate, job.maximum);
      $('.salary-results').append(`<div class="Position-Title">${job.position_title}</div> <div class="salary-over-bitcoin">${SalarydividedbyBitcoin(rate,job.maximum)}</div>`);
    }
  });
})
};
function SalarydividedbyBitcoin(rate, maximum) {
  return maximum / rate ;
}


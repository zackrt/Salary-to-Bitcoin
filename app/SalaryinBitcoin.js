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
    $('.salary-results').html("");
    for (const job of data) {
      console.log('rate', rate, job.maximum);
      $('.salary-results').append(`<div class="job-listing-output">
      <div class="Position-Title">${job.position_title}</div>
      <div class="max-salary">
      <h4>Max. Salary:$${job.maximum}
      </h4>
      </div> <div class="salary-over-bitcoin">
      </h5>This Salary Equals:${SalarydividedbyBitcoin(rate,job.maximum)}
      BTC</h5>
      </div>`);
    }
    // Marius Banea no catch error in promise
    //line 28 how to return a float of ten-thousandths .0001?
  });
})
};
function SalarydividedbyBitcoin(rate, maximum) {
  //trying to reduce output of salary/btc to 4 decimal places, parseFloat?
  var roundedBTC = parseInt(maximum);
  console.log(roundedBTC);

  let salaryResults = roundedBTC / rate ;
  return salaryResults.toFixed(4);
  
}

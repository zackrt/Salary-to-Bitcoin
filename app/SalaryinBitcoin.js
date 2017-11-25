import $ from 'jquery';

const url =
"https://api.usa.gov/jobs/search.json";
console.log($('#jobs-form'));

export const jobFormHandler = ()=> {
$('#jobs-form').submit((event) => {
  console.log("thanksgiving");
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
      $('.salary-results').append(`${job.position_title} ${SalarydividedbyBitcoin(rate,job.maximum)}`);
    }
   // RenderJobs(data);
  });
})
};
function SalarydividedbyBitcoin(rate, maximum) {
  return maximum / rate ;
}


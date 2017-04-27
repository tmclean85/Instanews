$(function(){
  console.log('hi');

});

var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "2eb56f19cf854564af82b4d0641928ec"
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
}); 








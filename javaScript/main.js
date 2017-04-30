
  $(function(){
  
$('.stories-list ul').empty();  

 $('select').change(function(){
  
var url = 'https://api.nytimes.com/svc/topstories/v2/';
  url+=$(this).val();
  url+='.json';
  url += '?' + $.param({'api-key': '2eb56f19cf854564af82b4d0641928ec'});
  
$.ajax({
      url: url,
      method: 'GET',
    }).done(function(data) {
    $.each(data.results, function(index, value){
}); 
 var articleGroup = data.results.filter(function (item) {
      return item.multimedia.length; 
    }).slice(0, 12);

     $.each(articleGroup, function(key, value) {
      var url = value.url;
      var pic = value.multimedia.url;
      var title = value.title;
      var caption = value.abstract;



     articleGroup.forEach(function(){
         $('#story-item').append(appendItem)
  var appendItem = '';
  console.log(title)
      appendItem += '<div class="story-box-container"><li class="story-box"><a href="';
      appendItem += url;
      appendItem += '"><p>';
      appendItem += caption;
      appendItem += '</p></a></li></div>';
      
console.log(appendItem)
       });
     });
  });
 });
});
   
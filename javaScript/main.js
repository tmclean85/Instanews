$(function(){
  
  var url = 'https://api.nytimes.com/svc/topstories/v2/home.json';
  url += '?' + $.param({
    'api-key': 'a1f474fef60b4344b4a905fde1e852da'
  });
  
  var storyCategory = '';
  var sections = '';
  
  $.ajax({
    url: url,
    method: 'GET',
  })
  .done(function(data) {
    $.each(data.results, function(index, value){
      if(!storyCategory.includes(value.section))
        storyCategory += '<option class="dropdown-item">' + value.section + '</option>'
      
      var all_sections = [data];
      var uniques = [];
      $.each(all_sections, function(i, section){
        var section_name = section.data;
        var already_added = false;
        $.each(uniques, function(i, unique_section) {
          if (unique_section.data === section_name) {
            already_added = true;
          }
        });
        if (!already_added) {
          uniques.push(section);
        }
      });
      console.log(uniques);
      
    })
    $('#sections').append(storyCategory);
  })
  .fail(function(err) {
    console.log('ERROR', err);
  })
});
$('.loading-gif').hide();
$(document).ready(function () {
  $(function () {

    var storiesList = $('#story-item')




    $('select').change(function () {
      $(storiesList).empty();
      $('.content-wrapper').removeClass('content-wrapper-alt')
      $('.loading-gif').show();
      $('.content-wrapper').addClass('content-wrapper-alt');

      var url = 'https://api.nytimes.com/svc/topstories/v2/';
      url += $(this).val();
      url += '.json';
      url += '?' + $.param({ 'api-key': '2eb56f19cf854564af82b4d0641928ec' });

      $.ajax({
        url: url,
        method: 'GET',
      }).done(function (data) {
        $.each(data.results, function (index, value) {
        });
        var articleGroup = data.results.filter(function (item) {
          return item.multimedia.length;
        }).slice(0, 12);

        $.each(articleGroup, function (key, value) {
          var url = value.url;
          var pic = value.multimedia[4].url;
          var title = value.title;
          var caption = value.abstract;
          var appendItem = '';

          appendItem += '<div class="story-box-container"><li class="story-box" style="background-image: url('
          appendItem += pic
          appendItem += '");"><a href="';
          appendItem += url;
          appendItem += '"><div class="text-box"><p>';
          appendItem += caption;
          appendItem += '</p></div></a></li></div>';

          $('#story-item').append(appendItem);
          console.log(appendItem);
          $('.loading-gif').hide();
        });
      });
    });
  });
});


   
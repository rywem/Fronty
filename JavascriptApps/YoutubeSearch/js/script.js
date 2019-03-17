
var Api = api();
console.log(Api.getKey());


//Searchbar Handler
$(function(){
    var searchField = $('#query') ;
    var icon = $('#search-btn');
    
    //Focus event handler
    $(searchField).on('focus', function(){
        $(this).animate({
           width: '100%' 
        }, 400);
        $(icon).animate({
            right: '10px'
        }, 400);
    });
    //Blur event 
    $(searchField).on('blur', function(){
        if(searchField.val() == '') {
            $(searchField).animate({
                width: '45%'
            }, 400, function(){});
            $(icon).animate({
                right: '360px'
            }, 400, function(){});
        }
    });
    
    $('#search-form').submit(function (e){
        e.preventDefault();
    });
});

function search() {
    //clear results
    $('#results').html('');
    $('buttons').html('');
    
    //Get form input
    q = $('#query').val();
    
    //run GET request on API
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: 'snippet, id',
            q: q,
            type: 'video',
            key: Api.getKey() }, 
            function(data) {
                var nextPageToken = data.nextPageToken;
                var prevPageToken = data.prevPageToken;                
                //log data
                console.log(data);
                
                $.each(data.items, function(i, item){
                    //Get output
                    var output = getOutput(item);
                    //Display results
                    $('#results').append(output);
                });
            }
    );
}

//Build output

function getOutput(item) {
    var videoId = item.id.videoId;
    var title = item.snippet.title;
    var description = item.snippet.description;
    var thumb = item.snippet.thumbnails.high.url;
    var channelTitle = item.snippet.channelTitle;
    var videoDate = item.snippet.publishedAt;
    
    //Build output string
    
    var output = '<li>' + 
        '<div class="list-left">' +
        '<img src="'+ thumb +'">' +
        '</div>' +
        '<div class="list-right">' +
        '<h3>'+title+'</h3>' +
        '<small>By <span class="cTitle">'+channelTitle+'</span> on '+videoDate+'</small>' +
        '<p>'+description+'</p>' +
        '</div>' +
        '</li>' +
        '<div class="clearfix"></div>' +
        '';
    
    return output;
}






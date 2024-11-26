//nicholas 
//lab 15 
//november 25th 2024
//public


// Add this line before your AJAX call to enable CORS Anywhere
$.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

$("#myButton").click(function() {
    $.ajax({
        url: "http://www.yerkee.com/api/fortune", // Original API URL
        type: "GET",
        dataType: "json",
        success: function(data) {
            console.log("Fetched fortune:", data.fortune);
            alert(data.fortune);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
            alert("Error fetching fortune!");
        }
    });
});
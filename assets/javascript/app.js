//Create an array of strings related to a topic of my interests.


var topicsArr = ["Pizza", "Tacos", "Sushi", "Pasta", "French Fries"];
console.log(topicsArr);

var apiKey = "W2rfdCIplPQR1xAHGGIkKCxv1XxMx2V"

//A on click button for displaying topic buttons
$("button").on("click", function() {
    var topic = $(this).attr("data-topic");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      topic + "&api_key=W2rfdCIplPQR1xAHGGIkKCxv1XxMx2V2&limit=10";
    // var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=W2rfdCIplPQR1xAHGGIkKCxv1XxMx2V2&tag=&rating=G"
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    console.log(response)
    console.log(response.data[0])
    console.log(response.data[0].rating)

      var results = response.data

      for (let i = 0; i < results.length; i++) {
          var topicDiv = $("<div>");
          
          
      }

    // Ajax call here / make sure to use the correct API key
    // ;
    

   
    
})
})
    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of movie-
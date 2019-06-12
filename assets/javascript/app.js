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
    

      var results = response.data

      for (let i = 0; i < results.length; i++) {
        var topicDiv = $("<div>");

        var rating = results[i].rating;
         var p = $("<p>").text("Rating: " + rating);
         console.log(rating)

         // Make an image tag with jQuery and store it in a variable named animalImage.
         var topicImage = $("<img>");
         topicImage.attr("src", results[i].images.fixed_height.url)

         // Append the p variable to the animalDiv variable.
        topicDiv.append(p);
        // Append the animalImage variable to the animalDiv variable.
        topicDiv.append(topicImage);
        // Prepend the animalDiv variable to the element with an id of gifs-appear-here.
        $("#gifs-appear-here").prepend(topicDiv);
      }

    // Ajax call here / make sure to use the correct API key
    // ;
    

   
    
})
})
    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of movie-
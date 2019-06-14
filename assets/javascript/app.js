//Create an array of strings related to a topic of my interests.


var topicsArr = ["Pizza", "Tacos", "Sushi", "Pasta", "French-Fries"];
console.log(topicsArr);

var apiKey = "W2rfdCIplPQR1xAHGGIkKCxv1XxMx2V"

//A on click button for displaying topic buttons
$("button").on("click", function() {
    var topic = $(this).attr("data-topic");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      topic + "&api_key=W2rfdCIplPQR1xAHGGIkKCxv1XxMx2V2&limit=10";
    
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
        //  console.log(rating)

         
         var topicImage = $("<img>");
         topicImage.attr("src", results[i].images.fixed_height.url)
            topicImage.attr("data-state")
            topicImage.attr("data-still")
            topicImage.attr("data-animate")
            
            //

         
        topicDiv.append(p);
        
        topicDiv.append(topicImage);
        
        $("#gifs-appear-here").prepend(topicDiv);

       
      }
    
})

})
var newTopicArr = []
function renderButtons() {
    $("#buttons-view").empty();
    // Delete the content inside the buttons-view div prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    for (var i = 0; i < newTopicArr.length; i++) {
      var topicBtn = $("<button>");
      topicBtn.text(newTopicArr[i]);
      topicBtn.attr("class", "topic-btn");
      topicBtn.attr("data-topic", newTopicArr[i])
      // movieBtn.addClass("movie-btn");
      $("#buttons-view").append(topicBtn)
    }
    // Loop through the array of movies, then generate buttons for each movie in the array
  }
  $(document).on("click", ".topic-btn", function (e) {
    var topic = $(this).attr("data-topic");
   
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      topic+ "&api_key=W2rfdCIplPQR1xAHGGIkKCxv1XxMx2V2&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
        console.log(response.data)
        
        var img= response.data
        
        
        for (let i = 0; i < img.length; i++) {
            var topicDiv2 = $("<div>");

            var rating = img[i].rating;
             var p = $("<p>").text("Rating: " + rating);
            //  console.log(rating)
    
             //before I added lines 91-95, when I would console.log response.data for "hotdog", I would see links for hotdog gifs 
             //but they would not appear on the web page. 
             //After adding these lines, gifs appeared on the web page, but they were not related to the topic.
             var topicImage = $("<img>");
             topicImage.attr("src", img[i].images.fixed_height.url);

             topicDiv2.append(p);
      
            topicDiv2.append(topicImage);

        $("#gifs-appear-here").prepend(topicDiv2);
    }
        
      })

  })
  
  $("#add-topic").on("click", function (event) {
    
    event.preventDefault();

    var userTopic = $("#topic-input").val();
    
    newTopicArr.push(userTopic)
   
    renderButtons();

    
  });
  // Calling the renderButtons function to display the initial list of topics
  renderButtons();
    
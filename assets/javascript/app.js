//Create an array of strings related to a topic of my interests.

//on click button

var topics = ["Pizza", "Tacos", "Sushi", "Pasta", "French Fries"];
console.log(topics);

//A function for displaying topic buttons
function renderButtons(){
    $("#buttons-view").empty();
    for (var i = 0; i< topics.length; i++) {
      var topicBtn = $("<button>");
      topicBtn.text(topics[i]);
      topicBtn.attr("class", "topic-btn");
      topicBtn.attr("data-topicname", topics[i]);
      $("#buttons-view").append(topicBtn);
       
    }
}
$(document).on("click", ".topic-btn", function (e) {
    console.log(this);
    var topicName = $(this).attr("data-topicname");
    console.log(topicName)
    // alert(movieName)
    // Ajax call here / make sure to use the correct API key
    var apiKey = "W2rfdCIplPQR1xAHGGIkKCxv1XxMx2V";
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=W2rfdCIplPQR1xAHGGIkKCxv1XxMx2V2&tag=&rating=G"

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
          console.log(response);
      });
      
    
})
    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of movie-view
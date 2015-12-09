
$("button").click(function(){
    results = playlist["results"];
    var timer = 0 ;

    results.forEach(function(e,i){
      var my_id = "song"+i;
      $("#container").append('<div id='+my_id+' class="clickable trackBox" >'+results[i]["trackName"]+'<span class="inner">'+results[i]["trackName"]+'</span></div>');
      var my_div = $("#"+my_id);
      var offset = my_div.offset().left;
      my_div.delay(timer).animate({"opacity": 1.0, "left": 0}, 1000);
      timer += 100;
    });
});

$(document).on("click", ".clickable", function () {
  console.log("I am here !");
});

$(document).ready(function () {
  comet = $.ajax({
    url: "https://lit-fortress-6467.herokuapp.com/object",
    method: "GET",
    dataType: "json"
  })
  comet.done(function (payload) {
    console.log(payload);
  })
})

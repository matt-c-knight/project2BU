$(document).ready(function () {
    $('.my-select').change(function(){
        var selected;
        selected = $(this).find(":selected").data("tag");
      console.log(selected)
      var queryurl = "/api/posts/" + selected;
        $.get(queryurl, function(data) {
            console.log(data)
        })
        
     });


})


$(document).ready(function() {
    var selected;
    $('#my-select').change(function(){
       selected = $(this).find(":selected").data("tag");
     console.log(selected)
   
    });
    $("#submit-post").click(function (event) {
      event.preventDefault();
      console.log(selected)
      var nameInput = $(".name").val();
      var linkInput = $(".link").val().trim();
      var textInput = $(".text").val().trim();
      
          var newPost = {
            username: nameInput,
            link: linkInput,
            blurb: textInput,
            tagId: selected
        }
        console.log(newPost)
          function createPosts(data) {
            $.post("/api/posts", data)
                .then(
                    console.log(data)
                );
        }
        createPosts(newPost)
     
  });
  
  });
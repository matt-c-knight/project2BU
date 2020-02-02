$(document).ready(function () {
    $('.my-select').change(function(){
        selected = $(this).find(":selected").data("tag");
      console.log(selected)
    
     });


})
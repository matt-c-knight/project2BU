$(document).ready(function () {
  $(".login").click(function (event) {
      event.preventDefault();
      var emailInput = $(".userEmail").val().trim();
      var passwordInput = $(".userPassword").val().trim();
      $.get("/api/users", function (data) {
        console.log(data)
  
        for (var i = 0; i < data.length; i++) {
          if (data[i].email === emailInput && data[i].password === passwordInput) {
            console.log("Success!!");
            window.location.href = './feed.html';
          }
        }
      })
    })
  $("#create-account").click(function () {
      var githubInput = $(".github");
      var passwordInput = $(".password");
      var emailInput = $(".email");
      // var githubInput = $(".github");
      var newUser = {
          github: githubInput.val().trim(),
          password: passwordInput.val().trim(),
          email: emailInput.val().trim()
      }
      function createUser(userData) {
          $.post("/api/users", userData)
              .then(
                  console.log(userData)
              );
      }
      createUser(newUser);
      window.location.href = './feed.html';




  });


});
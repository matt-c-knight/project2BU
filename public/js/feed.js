$(document).ready(function() {
    
    function getPosts() {
        $.get("api/posts")
        .then(function(res){
          for (i = 0; i < res.length; i++)  {
          const urlPreview = JSON.parse(res[i].preview);
          console.log(urlPreview.title);
          $("#post-feed").append(
              `<div class="columns block is-bordered" style="margin: 20px;">
              <div class="column card">
                  <div class="columns card-header">
                      <div class="button is-white" id="username" value="${res[i].username}">${res[i].username}</div>
                      <div class="column card-footer-item">
                        
                      </div>
                  </div>
                  
                  <div class="columns card-footer"></div>
              </div>
  
                      </div>
                      <div class="column"></div>
                  </div>
                  <div class="columns card-content card-footer">
                      <div class="column"></div>  
                      <div class="column is-two-thirds">   
                          <p class="title ">${res[i].blurb}</p>
                      </div>
                      <div class="column"></div>  
                  </div>
              </div>
          </div>`
          );
        };

    }).then($("#username").click(function (event) {
        event.preventDefault();
        let username = $(this).attr("value");
        console.log(username)
        let githubUrl = "https://api.github.com/users/" + username;
        console.log(username);
        console.log(githubUrl);
        $.ajax({
            url: githubUrl,
            method: 'GET'
        }).then(function (res) {
            $('.avatar').attr('src', res.avatar_url);
            $('.github-username').text(res.login);
            $('.github-location').text(res.location);
            $('.github-url').text(res.html_url);
            $('.github-url').attr('href', res.html_url);
            $('.bio').text(res.bio);
            $('.github-repos').text(res.public_repos);
            $('.github-followers').text(res.followers);
        });
        console.log('working');
        window.location.href = './profile.html';
    }));
   
  };
  getPosts();
  



});




//------------------------------------------------------------------------------------------------
$(document).ready(function () {
    $.get("/api/users", function(res) {
        for (i = 0; i < res.length; i++)  {
        console.log(res[0].github)
         $(".my-select").append(`<option>${res[i].github}</option>`)
        }
        // $(".my-select").append(`<option>${res.github}</option>`)
    });
    $(".my-select").change(function (event) {
        event.preventDefault();
        var selected;
        selected = $(this).find(":selected").text();
        let githubUrl = "https://api.github.com/users/" + selected;
        console.log(selected);
        console.log(githubUrl);
        $.ajax({
            url: githubUrl,
            method: 'GET'
        }).then(function (res) {
            var name = res.name;
            var img = res.avatar_url;
            $("#append").append(`
            <p>${name}</p>
            <img src="${img}">
            `);
            
            
            
        });
        console.log('working');
        // window.location.href = './profile.html';
    });
});

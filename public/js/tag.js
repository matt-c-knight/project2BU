$(document).ready(function () {
    $('.my-select').change(function () {
        var selected;
        selected = $(this).find(":selected").data("tag");
        console.log(selected)
        var queryurl = "/api/posts/" + selected;
        $.get(queryurl, function (res) {
            console.log(res)
            // for(i = 0; i < res.length; i++){
                // const urlPreview = JSON.parse(res.preview);
                console.log(res)
                $(".feed").append(`<div class="columns block is-bordered" style="margin: 20px;">
                <div class="column card">
                    <div class="columns card-header">
                        <div class="button is-white">${res.username}</div>
                        <div class="column card-footer-item">
                            
                        </div>
                    </div>
                    <div class="columns card-content is-fullwidth">
                        <div class="column"></div>
                        <div class="column is-mobile" id="link-preview">
                          <!-- this is where we need to append the url previews -->
                          <div class="card">
                              <div clas="columns card-header">
                                  
                              </div>
                          <div class="columns card-content">
                              <div class="column card-image">
                              <iframe width="560" height="315" src="${res.link}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              </div>
                          <div class="column card-content">
                            
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
                            <p class="title ">${res.blurb}</p>
                        </div>
                        <div class="column"></div>  
                    </div>
                </div>
            </div>`);
            // };
        });


    });


});
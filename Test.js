var page;
$(
  $("nav li a").hover(function() {
    page = "."+$(this).data("page");
    $(page).addClass("active")
  }, function() {
    $(page).removeClass("active");
  })
)
$( document ).ready(function() {
    showAlt();
});

function showAlt(){
  var img = document.getElementsByClassName('skillImgs');
  var text = document.getElementsByClassName('imgDiv');

for (var i = 0; i < img.length; i++) {
  img[i].addEventListener("mouseover", function(e) {
    var alt = this.alt;
    $(this).addClass('imgOpacity');
    $(this).next().css({"visibility":"visible"});
    e.target.nextElementSibling.innerText = alt;
  });
  img[i].addEventListener("mouseout", function(e) {
    $(this).removeClass('imgOpacity');
    $(this).next().css({"visibility":"hidden"})
  });
}
};

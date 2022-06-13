var i = 0;

var index = 0;
var slider = document.getElementsByClassName("slider");
var line = document.getElementsByClassName("line");

timer = 0;
auto();
function show(n) {
  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }
  for (i = 0; i < line.length; i++) {
    line[i].className = line[i].className.replace("active");
  }

  slider[n - 1].style.display = "block";
  line[n - 1].className += " active";
}

function auto() {
  index++;
  console.log("index is ", index);
  if (index > slider.length) {
    index = 1;
  }
  show(index);

  timer = setTimeout(auto, 2000);
}
function plusSlide(n) {
  index += n; // n - 1 or n = -1
  if (index > slider.length) {
    // to move from last
    index = 1;
  }
  if (index < 1) {
    // to move from first to last
    index = slider.length;
  }
  show(index);
  if (timer) {
    clearTimeout(timer);
  }
  
  timer = setTimeout(auto, 8000);
}
function currentSlide(n) {
  index = n; // n - 1 or n = -1

  show(index);
  if (timer) {
    clearTimeout(timer);
  }
  
  timer = setTimeout(auto, 8000);
}

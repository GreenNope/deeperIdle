var depth = 0;
var pickLevel = 1;

setInterval(function() {
  depth = depth + pickLevel;
  document.getElementById("depth").innerHtml = depth.toString;
  console.log("epic");
}, 1000);

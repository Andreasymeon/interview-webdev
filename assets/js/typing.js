
/*typing effect*/
var i = 0;
var txt = 'Andrea Symeon Junior Web Developer!'; /* The text */
var speed = 500; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

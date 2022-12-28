const track = document.getElementById('image-track');
const images = document.getElementsByClassName("image");

window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
}
window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt === "0" ) return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100;
  const nextPercentage = Math.max(Math.min(parseFloat(track.dataset.prevPercentage) + percentage, 0), -100);

  track.dataset.percentage = nextPercentage;
  track.style.transform = `translate(${nextPercentage}%, -50%)`; 

  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });

  for (const image of images) {
    image.animate({
      objectPosition: `${nextPercentage + 100}% center`,
    },{
      duration: 1200,
      fill: "forwards"
    })
  }
}

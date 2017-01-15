//This is for stars randomly appearing :)
var body = document.body;
var width = window.innerWidth;
var height = window.innerHeight;
function fade(image, faded){
  setTimeout(function(){
    if(image!=null){
      image.style.opacity = faded/100;
      faded -=2;
      if(faded != 0){
        fade(image, faded);
      }else{
        if(image.parentNode!=null){
          image.parentNode.removeChild(image);
        }
      }
    }
  },200)
}
function placeStar(){
  var starBirth = document.createElement('img');
  starBirth.src = 'star.svg';
  starBirth.className += 'star';
  starBirth.style.width = Math.floor(Math.random()*10+10)+'px';
  starBirth.style.position = 'absolute';
  starBirth.style.left = Math.random()*(width-20)+'px';
  starBirth.style.top = Math.random()*(height-20)+'px';
  starBirth.style.zIndex = '-100';
  document.body.appendChild(starBirth);
  faded = 100;
  fade(starBirth, faded);
}
function clearStars(){
  stars = document.getElementsByClassName('star');
  while(stars[0]){
    stars[0].parentNode.removeChild(stars[0]);
  }
  width = window.innerWidth;
  height = window.innerHeight;
}
window.addEventListener('resize', clearStars);
placing = setInterval(placeStar, 1000);

//Another Cloud Attempt!!! It might work YAY
//Cloud styling is in css
//How many clouds would you like?
howMany = 10;//That will be 10 clouds please :), Je Voudrais dix Clouds.
for (var f = 0; f < howMany; f++) {
  example = document.createElement('div');
  example.className += 'cloud';
  document.body.appendChild(example);
  for (var g = 0; g < 3; g++) {
    example.appendChild(document.createElement('div'));
  }
}

//Animate the cloud
class CLOUD{
  constructor(dom, x, elevation=null){
    this.dom = dom;
    this.x = x;
    this.elevation = Math.floor(125-(Math.random()*250));//Randomly scattered clouds --> You can't predict the weather
    this.maxX = Math.sqrt(15625 - Math.pow(Math.abs(this.elevation),2));
    //this.maxX = Math.floor((1/(Math.sqrt((250^2)-(this.elevation^2))))*10000)/6;
    if(Math.random()*2<1){
      this.right = true;
    }else{
      this.right = false;
    }
    this.speed = Math.floor(Math.random()*3)+1;
    //setInterval(this.move, 100);
  }
  move(){
    if(this.right){
      this.x+=this.speed;
      if(this.x>=this.maxX){
        this.right = false;
      }
    }else{
      this.x-=this.speed;
      if(this.x<=(0-this.maxX)){
        this.right = true;
      }
    }
    this.dom.style.top = 'calc(50% + ' + (this.elevation-15) + 'px)';
    this.dom.style.left = 'calc(50% + ' + (this.x-25) + 'px)';
  }
}

clouds = [];
doms = document.getElementsByClassName('cloud');
for (var i = 0; i < doms.length; i++) {
  clouds.push(new CLOUD(doms[i], ((Math.random()*200)-100) ));
  clouds[i].mover = function(obj){
    obj.move();
  }
  setInterval(clouds[i].mover, 50, clouds[i]);
}

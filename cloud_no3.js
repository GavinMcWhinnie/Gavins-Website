//Another Cloud Attempt!!!

class CLOUD{
  constructor(dom, x, elevation=null){
    this.dom = dom;
    this.x = x;
    this.elevation = Math.floor(125-(Math.random()*250));//Randomly scattered clouds --> You can't predict the weather
    this.maxX = Math.sqrt(15625 - Math.pow(Math.abs(this.elevation),2));
    //this.maxX = Math.floor((1/(Math.sqrt((250^2)-(this.elevation^2))))*10000)/6;
    this.right = true;
    //setInterval(this.move, 100);
  }
  move(){
    if(this.right){
      this.x++;
      if(this.x>=this.maxX){
        this.right = false;
      }
    }else{
      this.x--;
      if(this.x<=(0-this.maxX)){
        this.right = true;
      }
    }
    this.dom.style.top = 'calc(50% + ' + (this.elevation-15) + 'px)';
    this.dom.style.left = 'calc(50% + ' + (this.x-25) + 'px)';
  }
}
var cloud1 = document.getElementsByClassName('cloud')[0];
cloud1 = new CLOUD(cloud1, 0);
cloud1.mover = function(){
    cloud1.move();
}
setInterval(cloud1.mover, 50);
var cloud2 = document.getElementsByClassName('cloud')[1];
cloud2 = new CLOUD(cloud2, 0);
cloud2.mover = function(){
    cloud2.move();
}
setInterval(cloud2.mover, 50);
var cloud3 = document.getElementsByClassName('cloud')[2];
cloud3 = new CLOUD(cloud3, 0);
cloud3.mover = function(){
    cloud3.move();
}
setInterval(cloud3.mover, 50);

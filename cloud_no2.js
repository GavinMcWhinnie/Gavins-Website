//Clouds are cool - by Iain
//This is was rubbish bye bye
right = true;

function placeCloud(cloud, x, elevation){
  cloud.style.top = 'calc(50% + ' + (elevation-15) + 'px)';
  cloud.style.left = 'calc(50% + ' + (x-25) + 'px)';
}

clouds = document.getElementsByClassName('cloud');
for(var i = 0; i<clouds.length; i++){
  cloud = clouds[i];
  function getThisCloudOnTheRoad(){
    var maxX;
    var elevation = Math.floor(125-(Math.random()*250));
    maxX = Math.floor(Math.sqrt((250^2)-(elevation^2)));
    maxX += 100;
    console.log('elevation: ' + elevation);
    console.log('circling radius: ' + maxX);
    console.log(clouds[i]);
    var x;
    x = Math.floor(Math.random()*maxX);
    x = (0-x)+(x*2);
    window.setInterval(move(), 100, cloud[i], elevation);
  }
}
function move(cloud, elevation){
  if(right){
    x++;
    if(x==maxX){
      right = false;
    }
  }else{
    x--;
    if(x==(0-maxX)){
      right = true;
    }
  }
  placeCloud(cloud, x, elevation);
}

//This is severly bad - Iain
//At least a was close on my first attempt
//This is disgraceful programmin my friend
//Dissapionting

for(i=0; i < 3; i++) {
    var div = document.createElement('div');
    document.getElementById('cloud').appendChild(div);
    div.id = 'cloud' + i;
}

var cloud = document.getElementById('cloud');
cloud.style.position = 'absolute';
cloud.style.width = '50px';
cloud.style.height = '30px';


for(i=0; i < 3; i++) {
    window['cloud' + i] = document.getElementById('cloud' + i);
    window['cloud' + i].style.borderRadius = '10px';
    window['cloud' + i].style.position = 'relative';
    window['cloud' + i].style.height = '10px';
    window['cloud' + i].style.backgroundColor = '#e6e6e6';
    switch(i) {
        case 0:
            cloud0.style.width = '20px';
            cloud0.style.left = '15px';
            break;
        case 1:
            cloud1.style.width = '40px';
            cloud1.style.left = '5px';
            break;
        case 2:
            cloud2.style.width = '50px';
            cloud2.style.left = '0px';
            break;
    }
}

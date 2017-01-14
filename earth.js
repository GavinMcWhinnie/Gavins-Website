document.body.style.backgroundColor = "black";
for(i=0; i < 10; i++) {
    var div = document.createElement('div');
    document.getElementById('planet').appendChild(div);
    div.id = i;
}

var earth = document.getElementById('planet');
planet.style.width = '250px';
planet.style.height = '250px';
planet.style.transform = 'Rotate(45deg)';

for(i=0; i < 10; i++) {
    window['div' + i] = document.getElementById(i);
    window['div' + i].style.borderRadius = '25px';
    window['div' + i].style.position = 'relative';
    window['div' + i].style.width = '100px';
    window['div' + i].style.height = '25px';
    //window['div' + i].style.backgroundColor = 'green';
    switch(i) {
        case 0:
            div0.style.width = '75px';
            div0.style.left = '87.5px';
            break;
        case 1:
            div1.style.width = '150px';
            div1.style.left = '50px';
            break;
        case 2:
            div2.style.width = '200px';
            div2.style.left = '25px';
            break;
        case 3:
            div3.style.width = '225px';
            div3.style.left = '12.5px';
            break;
        case 4:
            div4.style.width = '250px';
            div4.style.left = '0px';
            break;
        case 5:
            div5.style.width = '250px';
            div5.style.left = '0px';
            break;
        case 6:
            div6.style.width = '225px';
            div6.style.left = '12.5px';
            break;
        case 7:
            div7.style.width = '200px';
            div7.style.left = '25px';
            break;
        case 8:
            div8.style.width = '150px';
            div8.style.left = '50px';
            break;
        case 9:
            div9.style.width = '75px';
            div9.style.left = '87.5px';
            div9.style.background = 'radial-gradient(farthest-side at 50% 100%,white, 40%, blue 40%)';
            break;       
    }
}

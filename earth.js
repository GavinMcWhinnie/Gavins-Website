document.body.style.backgroundColor = "black";
for(i=0; i < 10; i++) {
    var div = document.createElement('div');
    document.getElementById('planet').appendChild(div);
    div.id = i;
}

var earth = document.getElementById('planet');
planet.style.position = 'absolute';
planet.style.width = '250px';
planet.style.height = '250px';
planet.style.transform = 'Rotate(45deg)';
planet.style.left = 'calc(50% - 125px)';
planet.style.top = 'calc(50% - 125px)';


for(i=0; i < 10; i++) {
    window['div' + i] = document.getElementById(i);
    window['div' + i].style.borderRadius = '25px';
    window['div' + i].style.position = 'relative';
    window['div' + i].style.height = '25px';
    switch(i) {
        case 0:
            div0.style.width = '75px';
            div0.style.left = '87.5px';
            div0.style.background = 'radial-gradient(farthest-side at 50% 0%, white 80%, blue 80%)';
            break;
        case 1:
            div1.style.width = '150px';
            div1.style.left = '50px';
            div1.style.background = 'linear-gradient(115deg, green 10%, blue 10%, blue 90%, green 90%)';
            break;
        case 2:
            div2.style.width = '200px';
            div2.style.left = '25px';
            div2.style.background = 'linear-gradient(115deg, green 20%, blue 20%, blue 60%, green 60%, green 65%,\
            blue 65%, blue 70%, green 70%, green 80%, blue 80%, blue 90%, green 90%)';
            break;
        case 3:
            div3.style.width = '225px';
            div3.style.left = '12.5px';
            div3.style.background = 'linear-gradient(115deg, green 20%, transparent 20%, transparent 30%, blue 30%,\
            blue 50%, transparent 50%, transparent 70%, green 70%, green 90%, transparent 90%), \
            linear-gradient(0deg, green 50%, blue 50%)';
            break;
        case 4:
            div4.style.width = '250px';
            div4.style.left = '0px';
            div4.style.background = 'linear-gradient(115deg, transparent 30%, blue 30%, blue 50%, transparent 50%),\
            linear-gradient(180deg, green 50%, transparent 50%), linear-gradient(115deg, green 20%, blue 20%, \
            blue 60%, green 60%, green 70%, blue 70%, blue 85%, green 85%)';
            break;
        case 5:
            div5.style.width = '250px';
            div5.style.left = '0px';
            div5.style.background = 'linear-gradient(115deg, green 10%, transparent 10%, transparent 30% , blue 30%, \
            blue 40%, transparent 40%, transparent 80%, blue 80%, blue 90%, transparent 90%), linear-gradient(180deg,\
            blue 50%, green 50%)';
            break;
        case 6:
            div6.style.width = '225px';
            div6.style.left = '12.5px';
            div6.style.background = 'linear-gradient(115deg, green 25%, blue 25%, blue 45%, green 45%, green 80%, blue 80%,\
            blue 95%, green 95%)';
            break;
        case 7:
            div7.style.width = '200px';
            div7.style.left = '25px';
            div7.style.background = 'linear-gradient(115deg, green 20%, blue 20%, blue 55%, green 55%, green 75%, blue 75%)';
            break;
        case 8:
            div8.style.width = '150px';
            div8.style.left = '50px';
            div8.style.background = 'linear-gradient(115deg, green 10%, blue 10%, blue 60%, green 60%, green 75%, blue 75%)';
            break;
        case 9:
            div9.style.width = '75px';
            div9.style.left = '87.5px';
            div9.style.background = 'radial-gradient(farthest-side at 50% 100%,white, 40%, blue 40%)';
            break;       
    }
}

/*
from https://cdn.prinsh.comcdn/NathanPrinsley-effect/rain.js
*/
//Hujan/ effect- By Mr-CAPITAL capitallail.blogspot.co.id
//tutorial by me Ramadoni :)
document.write("<style>.drop { position: absolute; width: 3;  filter: flipV(), flipH(); font-size: 40; color: blue }</style>");
snow = false;    // false-rain;   true-snow
snowsym = " * "  //These are the symbols for each
rainsym = " ' "  //You can put images here.
howmany = 10     //How many drops/snowflakes?

/**************Jangan hapus ini ***********/
if(snow){sym = snowsym; speed=1; angle=10; drops=howmany}
else{sym = rainsym; speed=50; drops=howmany; angle=6}
movex = -speed/angle; movey = speed; count = 0;

function moverain(){
for(move = 0; move < drops; move++){
xx[move]+=movex;  yy[move]+=mv[move];
hmm = Math.round(Math.random()*1);
if(xx[move] < 0){xx[move] = maxx+10;}
if(yy[move] > maxy){yy[move] = 10;}
drop[move].left = xx[move]
drop[move].top = yy[move]+document.body.scrollTop;
}setTimeout('moverain()','1')}

drop = new Array(); xx = new Array(); yy = new Array(); mv = new Array()
ly = "document.all[\'"; st = "\'].style"
for(make = 0; make < drops; make++){
document.write('<div id="drop'+make+'" class=drop>'+sym+'</div>');
drop[make] = eval(ly+'drop'+make+st);
maxx = document.body.clientWidth-40
maxy = document.body.clientHeight-40
xx[make] = Math.random()*maxx;
yy[make] = -100-Math.random()*maxy;
drop[make].left = xx[make]
drop[make].top = yy[make]
mv[make] = (Math.random()*5)+speed/4;
drop[make].fontSize = (Math.random()*10)+20;
if(snow){col = 'white'}else{col = 'blue'}
drop[make].color = col;
}
window.onload=moverain
/*
from https://cdn.prinsh.comcdn/NathanPrinsley-effect/rain.js
*/

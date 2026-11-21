(function(){
SK.gta6.vice=false;
SK.gta6.lg='#b86f33';
SK.gta6.ft='#f8fafc';
SK.gta6.d='Бесплатно · гавайка, очки, кепка, цепь';

function flower(g,x,y,r){
for(var i=0;i<5;i++){
var a=i*1.2566;
g.fillStyle='#ff4d94';
g.beginPath();g.ellipse(x+Math.cos(a)*r*.62,y+Math.sin(a)*r*.62,r*.5,r*.34,a,0,7);g.fill()}
g.fillStyle='#fde047';g.beginPath();g.arc(x,y,r*.3,0,7);g.fill()}

function outfit(g){
g.save();
g.beginPath();g.ellipse(70,58,62,34,0,0,7);g.clip();
var sg=g.createLinearGradient(0,34,0,92);sg.addColorStop(0,'#22d3ee');sg.addColorStop(1,'#0e7490');
g.fillStyle=sg;
g.beginPath();g.moveTo(42,10);g.quadraticCurveTo(30,60,40,100);g.lineTo(102,100);g.quadraticCurveTo(110,60,100,10);g.closePath();g.fill();
g.strokeStyle='#0b5e72';g.lineWidth=2;
g.beginPath();g.moveTo(42,10);g.quadraticCurveTo(30,60,40,100);g.stroke();
g.beginPath();g.moveTo(100,10);g.quadraticCurveTo(110,60,102,100);g.stroke();
g.fillStyle='#a3e635';
[[52,46,-.6],[78,44,.5],[64,78,.3],[90,76,-.5],[44,80,.6]].forEach(function(l){
g.save();g.translate(l[0],l[1]);g.rotate(l[2]);g.beginPath();g.ellipse(0,0,9,3.4,0,0,7);g.fill();g.restore()});
flower(g,50,60,7);flower(g,72,56,8);flower(g,90,62,7);flower(g,62,82,6.5);flower(g,86,84,6);
g.fillStyle='rgba(6,78,95,.3)';g.fillRect(30,84,80,14);
g.restore();
g.fillStyle='#ecfeff';g.strokeStyle='#0e7490';g.lineWidth=1.3;
g.beginPath();g.moveTo(97,38);g.lineTo(108,49);g.lineTo(100,61);g.closePath();g.fill();g.stroke();
g.strokeStyle='#fbbf24';g.lineWidth=2.4;g.lineCap='round';
g.beginPath();g.moveTo(99,66);g.quadraticCurveTo(114,92,132,70);g.stroke();
g.fillStyle='#fde047';g.strokeStyle='#b45309';g.lineWidth=1.2;
g.beginPath();g.arc(114,82,4.6,0,7);g.fill();g.stroke();
g.fillStyle='#92400e';g.font='bold 7px sans-serif';g.textAlign='center';g.fillText('$',114,84.6);g.textAlign='left';
g.strokeStyle='#fbbf24';g.lineWidth=2;
g.beginPath();g.moveTo(127,43);g.lineTo(113,40);g.stroke();
var lg=g.createLinearGradient(126,38,146,54);lg.addColorStop(0,'#1e1b4b');lg.addColorStop(1,'#7c3aed');
g.fillStyle=lg;g.strokeStyle='#fbbf24';g.lineWidth=1.8;
g.beginPath();g.ellipse(136,46,10.5,8,.1,0,7);g.fill();g.stroke();
g.strokeStyle='rgba(255,255,255,.75)';g.lineWidth=1.4;
g.beginPath();g.moveTo(130,42);g.lineTo(135,40);g.stroke();
g.fillStyle='#ff4d94';g.strokeStyle='#9d174d';g.lineWidth=1.4;
g.beginPath();g.moveTo(104,34);g.quadraticCurveTo(108,12,126,13);g.quadraticCurveTo(144,14,146,34);g.closePath();g.fill();g.stroke();
g.fillStyle='#be185d';
g.beginPath();g.ellipse(150,35,13,3.6,.06,0,7);g.fill();g.stroke();
g.strokeStyle='rgba(255,255,255,.55)';g.lineWidth=1.2;
g.beginPath();g.moveTo(126,13);g.lineTo(126,33);g.stroke();
g.fillStyle='#fde047';g.beginPath();g.arc(126,12.5,2.2,0,7);g.fill()}

var _mk=mk;
mk=function(k){
var c=_mk(k);
if(k==='gta6'){var g=c.getContext('2d');g.save();g.setTransform(1,0,0,1,0,10);outfit(g);g.restore()}
return c};
SPR={};

var _cs=curSkin;
curSkin=function(){return modeGta?'gta6':_cs()};

leg=function(x,y,a,P){
ctx.save();ctx.translate(x,y);ctx.rotate(a);
var gt=(P===SK.gta6)&&!mode67;
ctx.fillStyle=mode67?'#7e22ce':P.lg;
ctx.beginPath();ctx.ellipse(0,9,7,12,0,0,7);ctx.fill();
if(gt){
ctx.fillStyle='#fef3c7';ctx.beginPath();ctx.ellipse(0,3,8.2,5,0,0,7);ctx.fill();
ctx.strokeStyle='#ff4d94';ctx.lineWidth=1.6;ctx.beginPath();ctx.ellipse(0,3,8.2,5,0,.3,2.8);ctx.stroke()}
ctx.fillStyle=mode67?'#22d3ee':P.ft;
ctx.beginPath();ctx.ellipse(2,20,gt?9.5:8,gt?4.6:4,0,0,7);ctx.fill();
if(gt){
ctx.strokeStyle='#38bdf8';ctx.lineWidth=1.4;ctx.beginPath();ctx.ellipse(2,20,9.5,4.6,0,0,7);ctx.stroke();
ctx.strokeStyle='#ff4d94';ctx.beginPath();ctx.moveTo(-4,19);ctx.lineTo(7,19);ctx.stroke()}
ctx.restore()};
})();

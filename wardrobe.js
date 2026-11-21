(function(){
SK.gta6.vice=false;SK.gta6.lg='#b86f33';SK.gta6.ft='#f8fafc';
var _mk=mk,_cs=curSkin,_ready=ready;
var COLS=[['red','красный','#e53935'],['orange','оранжевый','#fb8c00'],['yellow','жёлтый','#fdd835'],['green','зелёный','#43a047'],['teal','бирюзовый','#00acc1'],['blue','синий','#1e88e5'],['purple','фиолетовый','#8e24aa'],['pink','розовый','#ec4899'],['black','чёрный','#2b2b33'],['white','белый','#f5f5f5'],['brown','коричневый','#8d5a2b']].map(function(a){return{k:a[0],n:a[1],c:a[2],d:mix(a[2],'#000',.35),l:mix(a[2],'#fff',.45)}});
function mix(a,b,t){function p(h){return[1,3,5].map(function(i){return parseInt(h.substr(i,2),16)})}
var x=p(a),y=p(b);return'#'+x.map(function(v,i){return('0'+Math.round(v+(y[i]-v)*t).toString(16)).slice(-2)}).join('')}
function E(g,x,y,rx,ry,r){g.beginPath();g.ellipse(x,y,rx,ry,r||0,0,7)}
function fs(g,c,d,w){g.fillStyle=c;g.strokeStyle=d;g.lineWidth=w||1.4}

var HAT={
cap:function(g,c){fs(g,c.c,c.d);g.beginPath();g.moveTo(104,35);g.quadraticCurveTo(106,11,126,12);g.quadraticCurveTo(145,13,147,35);g.closePath();g.fill();g.stroke();g.fillStyle=c.d;E(g,151,36,13,3.6,.06);g.fill();g.stroke();g.strokeStyle=c.l;g.lineWidth=1.1;g.beginPath();g.moveTo(126,12);g.lineTo(126,34);g.stroke();g.fillStyle=c.l;g.beginPath();g.arc(126,11.5,2,0,7);g.fill()},
beanie:function(g,c){fs(g,c.c,c.d);g.beginPath();g.moveTo(104,38);g.quadraticCurveTo(103,8,125,8);g.quadraticCurveTo(147,8,146,38);g.closePath();g.fill();g.stroke();g.fillStyle=c.d;g.fillRect(103,31,43,9);g.strokeStyle='rgba(255,255,255,.4)';g.lineWidth=1;for(var x=108;x<146;x+=5){g.beginPath();g.moveTo(x,31);g.lineTo(x,40);g.stroke()}g.fillStyle=c.l;g.strokeStyle=c.d;E(g,125,7,5.5,5.5);g.fill();g.stroke()},
tophat:function(g,c){fs(g,c.d,'#111',1.2);E(g,125,34,26,5);g.fill();g.stroke();fs(g,c.c,'#111',1.2);g.fillRect(110,6,30,28);g.strokeRect(110,6,30,28);g.fillStyle=c.d;g.fillRect(110,25,30,5);g.fillStyle=c.l;E(g,125,6,15,4);g.fill();g.stroke()},
cowboy:function(g,c){fs(g,c.c,c.d);E(g,125,34,35,6.5);g.fill();g.stroke();g.beginPath();g.moveTo(109,34);g.quadraticCurveTo(110,12,125,16);g.quadraticCurveTo(140,12,141,34);g.closePath();g.fill();g.stroke();g.fillStyle=c.d;g.fillRect(110,27,31,4);g.strokeStyle=c.d;g.beginPath();g.moveTo(118,17);g.quadraticCurveTo(125,21,132,17);g.stroke()},
bandana:function(g,c){fs(g,c.c,c.d);g.beginPath();g.moveTo(100,42);g.quadraticCurveTo(125,10,152,42);g.lineTo(147,46);g.quadraticCurveTo(125,24,105,48);g.closePath();g.fill();g.stroke();g.fillStyle='rgba(255,255,255,.85)';[[112,30],[125,24],[138,28],[120,34],[132,35]].forEach(function(p){g.beginPath();g.arc(p[0],p[1],1.5,0,7);g.fill()});g.fillStyle=c.d;g.beginPath();g.moveTo(103,44);g.lineTo(90,40);g.lineTo(94,50);g.closePath();g.fill();g.beginPath();g.moveTo(103,44);g.lineTo(92,54);g.lineTo(98,56);g.closePath();g.fill()},
beret:function(g,c){g.save();g.translate(122,25);g.rotate(-.18);fs(g,c.c,c.d);E(g,0,0,26,10);g.fill();g.stroke();g.fillStyle=c.d;g.beginPath();g.arc(7,-9,2.6,0,7);g.fill();g.restore()},
party:function(g,c){fs(g,c.c,c.d);g.beginPath();g.moveTo(111,38);g.lineTo(139,38);g.lineTo(125,0);g.closePath();g.fill();g.stroke();g.strokeStyle=c.l;g.lineWidth=2;for(var i=0;i<3;i++){g.beginPath();g.moveTo(114+i*2,30-i*10);g.lineTo(136-i*2,24-i*10+6);g.stroke()}g.fillStyle=c.l;g.beginPath();g.arc(125,1,4,0,7);g.fill()},
helmet:function(g,c){fs(g,c.c,c.d);g.beginPath();g.moveTo(103,39);g.quadraticCurveTo(103,7,126,8);g.quadraticCurveTo(149,9,149,39);g.closePath();g.fill();g.stroke();g.strokeStyle=c.l;g.lineWidth=2;for(var i=0;i<3;i++){g.beginPath();g.moveTo(114+i*10,14);g.lineTo(112+i*10,26);g.stroke()}g.fillStyle=c.d;g.beginPath();g.moveTo(138,38);g.lineTo(153,41);g.lineTo(144,33);g.closePath();g.fill()},
bucket:function(g,c){fs(g,c.c,c.d);g.beginPath();g.moveTo(110,35);g.lineTo(114,15);g.quadraticCurveTo(125,10,136,15);g.lineTo(140,35);g.closePath();g.fill();g.stroke();E(g,125,35,27,6);g.fill();g.stroke();g.fillStyle=c.d;g.fillRect(112,26,26,4)}
};
function arm(g,col){g.strokeStyle=col;g.lineWidth=2;g.beginPath();g.moveTo(127,43);g.lineTo(113,40);g.stroke()}
var GLS={
round:function(g,c){arm(g,c.d);g.fillStyle='rgba(190,230,255,.5)';g.strokeStyle=c.c;g.lineWidth=2.4;g.beginPath();g.arc(136,46,8.5,0,7);g.fill();g.stroke();g.strokeStyle='rgba(255,255,255,.8)';g.lineWidth=1.2;g.beginPath();g.moveTo(130,43);g.lineTo(134,40);g.stroke()},
aviator:function(g,c){arm(g,'#fbbf24');var l=g.createLinearGradient(126,38,146,54);l.addColorStop(0,'#1e1b4b');l.addColorStop(1,c.c);g.fillStyle=l;g.strokeStyle='#fbbf24';g.lineWidth=1.8;E(g,136,46,10.5,8,.1);g.fill();g.stroke();g.strokeStyle='rgba(255,255,255,.75)';g.lineWidth=1.4;g.beginPath();g.moveTo(130,42);g.lineTo(135,40);g.stroke()},
square:function(g,c){arm(g,c.c);g.fillStyle='rgba(17,24,39,.78)';g.strokeStyle=c.c;g.lineWidth=2.4;g.beginPath();g.roundRect(126,39,19,14,3);g.fill();g.stroke();g.strokeStyle='rgba(255,255,255,.6)';g.lineWidth=1.2;g.beginPath();g.moveTo(129,42);g.lineTo(133,42);g.stroke()},
heart:function(g,c){arm(g,c.d);fs(g,c.c,c.d,1.6);g.beginPath();g.moveTo(136,54);g.bezierCurveTo(123,46,127,35,136,42);g.bezierCurveTo(145,35,149,46,136,54);g.fill();g.stroke();g.fillStyle='rgba(255,255,255,.7)';g.beginPath();g.arc(131,43,1.8,0,7);g.fill()},
star:function(g,c){arm(g,c.d);fs(g,c.c,c.d,1.6);g.beginPath();for(var i=0;i<10;i++){var r=i%2?4.6:11,a=-1.5708+i*.62832;g[i?'lineTo':'moveTo'](136+Math.cos(a)*r,46+Math.sin(a)*r)}g.closePath();g.fill();g.stroke()}
};
function shirtPath(g){g.beginPath();g.moveTo(42,10);g.quadraticCurveTo(30,60,40,100);g.lineTo(102,100);g.quadraticCurveTo(110,60,100,10);g.closePath()}
function flower(g,x,y,r,a,b){for(var i=0;i<5;i++){var an=i*1.2566;g.fillStyle=a;g.beginPath();g.ellipse(x+Math.cos(an)*r*.62,y+Math.sin(an)*r*.62,r*.5,r*.34,an,0,7);g.fill()}g.fillStyle=b;g.beginPath();g.arc(x,y,r*.3,0,7);g.fill()}
function top(g,c,kind){
g.save();g.beginPath();g.ellipse(70,58,62,34,0,0,7);g.clip();
var sg=g.createLinearGradient(0,34,0,92);sg.addColorStop(0,c.c);sg.addColorStop(1,c.d);g.fillStyle=sg;shirtPath(g);g.fill();
if(kind==='stripes'){g.fillStyle='rgba(255,255,255,.75)';for(var y=26;y<96;y+=10)g.fillRect(30,y,90,4.5)}
if(kind==='dots'){g.fillStyle='rgba(255,255,255,.8)';for(var r=0;r<6;r++)for(var q=0;q<8;q++){g.beginPath();g.arc(40+q*10+(r%2)*5,30+r*11,2.2,0,7);g.fill()}}
if(kind==='hawaii'){g.fillStyle='#a3e635';[[52,46,-.6],[78,44,.5],[64,78,.3],[90,76,-.5],[44,80,.6]].forEach(function(l){g.save();g.translate(l[0],l[1]);g.rotate(l[2]);g.beginPath();g.ellipse(0,0,9,3.4,0,0,7);g.fill();g.restore()});[[50,60,7],[72,56,8],[90,62,7],[62,82,6.5],[86,84,6]].forEach(function(f){flower(g,f[0],f[1],f[2],'#ffffff','#ffcf4d')})}
if(kind==='checks'){g.strokeStyle='rgba(255,255,255,.5)';g.lineWidth=3;for(var x=38;x<110;x+=12){g.beginPath();g.moveTo(x,20);g.lineTo(x,100);g.stroke()}for(var y=28;y<100;y+=12){g.beginPath();g.moveTo(30,y);g.lineTo(115,y);g.stroke()}g.strokeStyle='rgba(0,0,0,.18)';g.lineWidth=1.5;for(var x2=44;x2<110;x2+=12){g.beginPath();g.moveTo(x2,20);g.lineTo(x2,100);g.stroke()}}
if(kind==='jersey'){g.fillStyle='#fff';g.fillRect(40,20,4,80);g.fillRect(98,20,4,80);g.font='bold 28px sans-serif';g.textAlign='center';g.fillText('7',70,76);g.textAlign='left'}
if(kind==='hoodie'){g.strokeStyle=c.d;g.lineWidth=1.8;g.beginPath();g.moveTo(52,86);g.lineTo(54,70);g.lineTo(86,70);g.lineTo(88,86);g.stroke()}
g.fillStyle='rgba(0,0,0,.14)';g.fillRect(30,86,90,14);
g.strokeStyle=c.d;g.lineWidth=2;g.beginPath();g.moveTo(42,10);g.quadraticCurveTo(30,60,40,100);g.stroke();g.beginPath();g.moveTo(100,10);g.quadraticCurveTo(110,60,102,100);g.stroke();
g.restore();
if(kind==='hoodie'){g.fillStyle=c.d;E(g,100,52,9,15,.2);g.fill();g.strokeStyle='rgba(255,255,255,.7)';g.lineWidth=1.4;g.beginPath();g.moveTo(98,58);g.lineTo(96,72);g.moveTo(103,58);g.lineTo(104,70);g.stroke()}
else{g.fillStyle=kind==='jersey'?c.d:'#f8fafc';g.strokeStyle=c.d;g.lineWidth=1.2;g.beginPath();g.moveTo(97,38);g.lineTo(108,49);g.lineTo(100,61);g.closePath();g.fill();g.stroke()}}
var NECK={
chain:function(g,c){g.strokeStyle=c.c;g.lineWidth=2.4;g.lineCap='round';g.beginPath();g.moveTo(99,66);g.quadraticCurveTo(114,92,132,70);g.stroke();fs(g,c.c,c.d,1.2);g.beginPath();g.arc(114,82,4.6,0,7);g.fill();g.stroke();g.fillStyle=c.d;g.font='bold 7px sans-serif';g.textAlign='center';g.fillText('$',114,84.6);g.textAlign='left'},
scarf:function(g,c){g.lineCap='round';g.strokeStyle=c.c;g.lineWidth=8;g.beginPath();g.moveTo(99,60);g.quadraticCurveTo(114,86,132,66);g.stroke();g.strokeStyle=c.l;g.lineWidth=2;g.setLineDash([3,5]);g.beginPath();g.moveTo(99,60);g.quadraticCurveTo(114,86,132,66);g.stroke();g.setLineDash([]);g.save();g.translate(105,74);g.rotate(.35);g.fillStyle=c.c;g.fillRect(-4,0,8,19);g.fillStyle=c.l;g.fillRect(-4,5,8,2.5);g.fillRect(-4,12,8,2.5);g.restore()},
bowtie:function(g,c){fs(g,c.c,c.d,1.2);g.beginPath();g.moveTo(114,78);g.lineTo(101,69);g.lineTo(101,87);g.closePath();g.fill();g.stroke();g.beginPath();g.moveTo(114,78);g.lineTo(127,69);g.lineTo(127,87);g.closePath();g.fill();g.stroke();g.fillStyle=c.d;g.beginPath();g.arc(114,78,3.4,0,7);g.fill()}
};
function cape(g,c){fs(g,c.c,c.d,1.6);g.beginPath();g.moveTo(98,38);g.lineTo(100,72);g.quadraticCurveTo(50,104,2,92);g.quadraticCurveTo(34,64,98,38);g.fill();g.stroke();g.strokeStyle=c.l;g.lineWidth=1.2;g.beginPath();g.moveTo(96,48);g.quadraticCurveTo(52,70,16,88);g.stroke()}
function shorts(g,c,kind){g.save();g.fillStyle=c.c;E(g,0,3,8.8,6.8);g.fill();g.clip();
if(kind==='stripe'){g.fillStyle='rgba(255,255,255,.85)';g.fillRect(-1.6,-6,3.2,18)}
if(kind==='dots'){g.fillStyle='rgba(255,255,255,.85)';[[-4,0],[3,-1],[0,5],[-5,6],[5,5]].forEach(function(p){g.beginPath();g.arc(p[0],p[1],1.3,0,7);g.fill()})}
g.restore();g.strokeStyle=c.d;g.lineWidth=1.2;E(g,0,3,8.8,6.8);g.stroke()}
function shoe(g,c,kind){
if(kind==='boot'){fs(g,c.c,c.d,1.2);E(g,3,20,10,5.5);g.fill();g.stroke();g.fillStyle=c.d;g.fillRect(-5,9,13,5);g.fillStyle=c.l;g.fillRect(-5,13,13,1.8)}
else{fs(g,c.c,'#f8fafc',1.8);E(g,2,20,9.5,4.6);g.fill();g.stroke();g.strokeStyle=c.l;g.lineWidth=1.4;g.beginPath();g.moveTo(-4,19);g.lineTo(7,19);g.stroke()}}

var CAT={hat:[],glasses:[],top:[],neck:[],bottom:[],shoes:[],cape:[]},BY={};
function add(slot,id,name,fn){var it={id:id,slot:slot,name:name,fn:fn};CAT[slot].push(it);BY[id]=it}
function gen(slot,shapes,pre,cols){shapes.forEach(function(s){cols.forEach(function(c){add(slot,pre+'_'+s[0]+'_'+c.k,s[1]+' · '+c.n,(function(sk,cc){return function(g){s[2](g,cc,s[0])}})(s,c))})})}
gen('hat',[['cap','Кепка',HAT.cap],['beanie','Шапка',HAT.beanie],['tophat','Цилиндр',HAT.tophat],['cowboy','Ковбойская шляпа',HAT.cowboy],['bandana','Бандана',HAT.bandana],['beret','Берет',HAT.beret],['party','Колпак',HAT.party],['helmet','Шлем',HAT.helmet],['bucket','Панама',HAT.bucket]],'hat',COLS);
gen('glasses',[['round','Круглые очки',GLS.round],['aviator','Авиаторы',GLS.aviator],['square','Квадратные очки',GLS.square],['heart','Очки-сердечки',GLS.heart],['star','Очки-звёзды',GLS.star]],'gl',COLS);
gen('top',[['plain','Футболка',top],['stripes','Тельняшка',top],['dots','Футболка в горох',top],['hawaii','Гавайка',top],['checks','Клетчатая рубашка',top],['jersey','Майка №7',top],['hoodie','Худи',top]],'top',COLS);
[['gold','Золотая цепь','#fbbf24'],['silver','Серебряная цепь','#cbd5e1'],['rose','Розовая цепь','#fb7185']].forEach(function(a){var c={c:a[2],d:mix(a[2],'#000',.4),l:a[2]};add('neck','neck_chain_'+a[0],a[1],function(g){NECK.chain(g,c)})});
gen('neck',[['scarf','Шарф',NECK.scarf],['bowtie','Бабочка',NECK.bowtie]],'neck',COLS);
gen('bottom',[['plain','Шорты',shorts],['stripe','Шорты с полоской',shorts],['dots','Шорты в горох',shorts]],'bot',COLS);
gen('shoes',[['sneaker','Кроссовки',shoe],['boot','Ботинки',shoe]],'sh',COLS);
COLS.forEach(function(c){add('cape','cape_'+c.k,'Плащ · '+c.n,function(g){cape(g,c)})});
var TOTAL=Object.keys(BY).length;
window.WARDROBE={cat:CAT,total:TOTAL};

var W={};try{W=JSON.parse(localStorage.getItem('gp_wd')||'{}')||{}}catch(e){}
function saveW(){try{localStorage.setItem('gp_wd',JSON.stringify(W))}catch(e){}}
function item(id){return id&&BY[id]?BY[id]:null}

function paint(c){
var g=c.getContext('2d');g.save();g.setTransform(1,0,0,1,0,10);
var cp=item(W.cape);
if(cp){g.globalCompositeOperation='destination-over';cp.fn(g);g.globalCompositeOperation='source-over'}
var t=item(W.top);if(t)t.fn(g);
var n=item(W.neck);if(n)n.fn(g);
if(cp){g.fillStyle='#fbbf24';g.beginPath();g.arc(99,54,3,0,7);g.fill()}
var gl=item(W.glasses);if(gl)gl.fn(g);
var h=item(W.hat);if(h)h.fn(g);
g.restore()}
mk=function(k){var c=_mk(k);paint(c);return c};
curSkin=function(){return modeGta?'gta6':_cs()};
leg=function(x,y,a,P){
ctx.save();ctx.translate(x,y);ctx.rotate(a);
ctx.fillStyle=mode67?'#7e22ce':P.lg;ctx.beginPath();ctx.ellipse(0,9,7,12,0,0,7);ctx.fill();
var b=mode67?null:item(W.bottom),s=mode67?null:item(W.shoes);
if(b)b.fn(ctx);
if(s)s.fn(ctx);else{ctx.fillStyle=mode67?'#22d3ee':P.ft;ctx.beginPath();ctx.ellipse(2,20,8,4,0,0,7);ctx.fill()}
ctx.restore()};
function refresh(){SPR={}}
refresh();

var css=document.createElement('style');
css.textContent='.wtabs{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}.wtabs button{flex:1 0 28%;padding:6px 4px;font-size:13px;margin:0;background:var(--bg);color:var(--tx);border:1px solid var(--bd)}.wtabs button.on{border-color:var(--ac);color:var(--ac)}.wgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:8px 0}.wit{background:var(--bg);color:var(--tx);border:2px solid var(--bd);padding:4px;margin:0;font-size:11px;font-weight:500;display:flex;flex-direction:column;align-items:center;gap:3px;line-height:1.15}.wit.on{border-color:var(--ac)}.wit canvas{width:64px;height:64px;background:#cfe3c8;border-radius:6px}.wpv{display:block;margin:0 auto;border-radius:10px;width:240px;height:170px}.wbox{max-width:420px!important}';
document.head.appendChild(css);

var TABS=[['hat','Шапки'],['glasses','Очки'],['top','Одежда'],['neck','Шея'],['bottom','Шорты'],['shoes','Обувь'],['cape','Плащи']];
var CROP={hat:[88,0,76,56],glasses:[100,22,72,56],top:[16,14,110,90],neck:[84,44,64,56],cape:[0,14,130,100]};
var BASE=null,tab='hat';
function base(){if(!BASE)BASE=_mk('classic');return BASE}
function thumb(cv,it){
var g=cv.getContext('2d');g.clearRect(0,0,64,64);g.fillStyle='#cfe3c8';g.fillRect(0,0,64,64);
g.save();
if(it.slot==='bottom'||it.slot==='shoes'){g.translate(30,it.slot==='bottom'?20:-4);g.scale(2.6,2.6);g.fillStyle=SK.classic.lg;g.beginPath();g.ellipse(0,9,7,12,0,0,7);g.fill();if(it.slot==='bottom'){it.fn(g)}else{it.fn(g)}}
else{var r=CROP[it.slot],f=Math.min(64/r[2],64/r[3]);g.scale(f,f);g.translate(-r[0],-r[1]);g.drawImage(base(),0,0);g.translate(0,10);if(it.slot==='cape'){g.globalCompositeOperation='destination-over'}it.fn(g)}
g.restore()}
function preview(){
var cv=document.getElementById('wpv');if(!cv)return;
var g=cv.getContext('2d'),saved=ctx;
g.fillStyle='#cfe3c8';g.fillRect(0,0,240,170);g.fillStyle='#8fbf72';g.fillRect(0,128,240,42);
var k=curSkin(),P=SK[k];ctx=g;
g.save();g.translate(112,134);g.scale(1.45,1.45);
var a=.25,b=-.25;leg(-48,-26,a,P);leg(20,-26,b,P);g.drawImage(getSpr(k),-70,-106);leg(-36,-26,-a,P);leg(32,-26,-b,P);
g.restore();ctx=saved}
var PRE=[['Vice City',{hat:'hat_cap_pink',glasses:'gl_aviator_purple',top:'top_hawaii_teal',neck:'neck_chain_gold',bottom:'bot_plain_white',shoes:'sh_sneaker_white'}],
['Джентльмен',{hat:'hat_tophat_black',glasses:'gl_round_black',top:'top_plain_white',neck:'neck_bowtie_red',shoes:'sh_boot_black',bottom:'bot_plain_black'}],
['Ковбой',{hat:'hat_cowboy_brown',glasses:'gl_square_black',top:'top_checks_red',neck:'neck_scarf_red',bottom:'bot_plain_blue',shoes:'sh_boot_brown'}],
['Спортсмен',{hat:'hat_cap_blue',top:'top_jersey_red',bottom:'bot_stripe_white',shoes:'sh_sneaker_white'}],
['Ниндзя',{hat:'hat_bandana_black',top:'top_plain_black',bottom:'bot_plain_black',shoes:'sh_sneaker_black'}],
['Супергерой',{glasses:'gl_square_black',top:'top_plain_blue',bottom:'bot_plain_red',shoes:'sh_boot_red',cape:'cape_red'}],
['Вечеринка',{hat:'hat_party_pink',glasses:'gl_star_yellow',top:'top_dots_purple',neck:'neck_bowtie_yellow',bottom:'bot_dots_teal',shoes:'sh_sneaker_orange'}]];
function applyAll(o){W={};Object.keys(o).forEach(function(k){if(BY[o[k]])W[k]=o[k]});saveW();refresh()}
function wardrobe(){
state='ready';
var worn=Object.keys(W).filter(function(k){return item(W[k])}).length;
var h='<div class="box wbox"><h2>Гардероб</h2><p>Вещей в каталоге: '+TOTAL+' · надето: '+worn+'</p><canvas class="wpv" id="wpv" width="240" height="170"></canvas><div class="wtabs" id="wtb">';
TABS.forEach(function(t){h+='<button data-t="'+t[0]+'" class="'+(t[0]===tab?'on':'')+'">'+t[1]+' ('+CAT[t[0]].length+')</button>'});
h+='</div><div class="wgrid" id="wgr"></div><div class="lr"><button class="sec" id="wno">Снять с этой части</button><button class="sec" id="wrn">Случайно</button><button class="sec" id="wal">Снять всё</button></div><p>Готовые образы:</p><div class="lr" id="wpr"></div><button class="sec" id="wbk">Назад</button></div>';
ov(h);
document.querySelectorAll('#wtb button').forEach(function(b){b.onclick=function(){tab=b.dataset.t;wardrobe()}});
var gr=document.getElementById('wgr');
CAT[tab].forEach(function(it){var b=document.createElement('button');b.className='wit'+(W[tab]===it.id?' on':'');var cv=document.createElement('canvas');cv.width=64;cv.height=64;var sp=document.createElement('span');sp.textContent=it.name;b.appendChild(cv);b.appendChild(sp);
b.onclick=function(){if(W[tab]===it.id)delete W[tab];else W[tab]=it.id;saveW();refresh();preview();gr.querySelectorAll('.wit').forEach(function(x){x.className='wit'});if(W[tab]===it.id)b.className='wit on'};
gr.appendChild(b);thumb(cv,it)});
var pr=document.getElementById('wpr');
PRE.forEach(function(p){var b=document.createElement('button');b.className='sec';b.textContent=p[0];b.onclick=function(){applyAll(p[1]);wardrobe()};pr.appendChild(b)});
document.getElementById('wno').onclick=function(){delete W[tab];saveW();refresh();wardrobe()};
document.getElementById('wal').onclick=function(){W={};saveW();refresh();wardrobe()};
document.getElementById('wrn').onclick=function(){W={};TABS.forEach(function(t){if(Math.random()<.8){var l=CAT[t[0]];W[t[0]]=l[Math.floor(Math.random()*l.length)].id}});saveW();refresh();wardrobe()};
document.getElementById('wbk').onclick=function(){bg();drawPig();ready()};
preview()}
ready=function(){_ready();var lr=document.querySelector('#ov .lr');if(lr&&!document.getElementById('wdb')){var b=document.createElement('button');b.className='sec';b.id='wdb';b.textContent='Гардероб';b.onclick=wardrobe;lr.appendChild(b)}};
window.openWardrobe=wardrobe;
if(state==='ready'){var lr0=document.querySelector('#ov .lr');if(lr0&&!document.getElementById('wdb')){var b0=document.createElement('button');b0.className='sec';b0.id='wdb';b0.textContent='Гардероб';b0.onclick=wardrobe;lr0.appendChild(b0)}}
})();

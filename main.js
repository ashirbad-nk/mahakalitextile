// Mahakali Textile — <20KB vanilla JS
(function(){
var btn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});nav.addEventListener('click',function(e){if(e.target.tagName==='A')nav.classList.remove('open');});}
var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
var top=document.getElementById('topBtn');
window.addEventListener('scroll',function(){if(top)top.style.display=window.scrollY>600?'block':'none';},{passive:true});
if(top)top.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
// ROI calculator (sample)
var b=document.getElementById('budget'),c=document.getElementById('cpc'),v=document.getElementById('conv');
var bv=document.getElementById('budgetVal'),cv=document.getElementById('cpcVal'),vv=document.getElementById('convVal'),out=document.getElementById('calcOut');
function calc(){if(!b||!c||!v)return;var bd=+b.value,cp=+c.value,cr=+v.value;bv.textContent=bd;cv.textContent=cp;vv.textContent=cr;var clicks=Math.floor(bd/cp);var perDay=(clicks*cr/100);var perMonth=Math.round(perDay*30);out.textContent='≈ '+clicks+' clicks/day → ~'+perMonth+' enquiries/month (sample, ' +cr+'% conv.)';}
[b,c,v].forEach(function(el){if(el)el.addEventListener('input',calc);});calc();
// Enquiry form -> WhatsApp + mailto fallback link
var f=document.getElementById('enquiryForm');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);var t='Namaste Mahakali Textile,%0AName: '+encodeURIComponent(d.get('name')||'')+'%0ANeed: '+encodeURIComponent(d.get('need')||'')+'%0AMsg: '+encodeURIComponent(d.get('msg')||'');window.open('https://wa.me/917978601417?text='+t,'_blank');});}
})();

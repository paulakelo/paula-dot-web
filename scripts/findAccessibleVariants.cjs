const fs = require('fs');
function hexToRgb(hex){ hex=hex.replace('#',''); if(hex.length===3) hex=hex.split('').map(c=>c+c).join(''); const n=parseInt(hex,16); return [(n>>16)&255,(n>>8)&255,n&255]; }
function rgbToHex([r,g,b]){ return '#'+[r,g,b].map(v=>v.toString(16).padStart(2,'0')).join(''); }
function rgbToHsl([r,g,b]){ r/=255;g/=255;b/=255; const max=Math.max(r,g,b), min=Math.min(r,g,b); let h,s,l=(max+min)/2; if(max===min){h=s=0;}else{ const d=max-min; s = l>0.5 ? d/(2-max-min) : d/(max+min); switch(max){case r: h=(g-b)/d + (g<b?6:0); break; case g: h=(b-r)/d + 2; break; case b: h=(r-g)/d + 4; break;} h/=6; } return [h*360, s*100, l*100]; }
function hslToRgb(h,s,l){ h/=360; s/=100; l/=100; if(s===0){ const v=Math.round(l*255); return [v,v,v]; } function hue2rgb(p,q,t){ if(t<0) t+=1; if(t>1) t-=1; if(t<1/6) return p+(q-p)*6*t; if(t<1/2) return q; if(t<2/3) return p+(q-p)*(2/3-t)*6; return p; } const q = l<0.5 ? l*(1+s) : l+s - l*s; const p = 2*l - q; const r = hue2rgb(p,q,h+1/3); const g = hue2rgb(p,q,h); const b = hue2rgb(p,q,h-1/3); return [Math.round(r*255), Math.round(g*255), Math.round(b*255)]; }
function srgbToLin(c){ c/=255; return c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4); }
function lum(hex){ const [r,g,b]=hexToRgb(hex); return 0.2126*srgbToLin(r)+0.7152*srgbToLin(g)+0.0722*srgbToLin(b); }
function contrast(a,b){ const L1=lum(a), L2=lum(b); const light=Math.max(L1,L2), dark=Math.min(L1,L2); return (light+0.05)/(dark+0.05); }

const bg = '#1C1C1C';
const targets = { blue: '#1C62C4', magenta: '#C41C62' };
const results = {};
for(const [name,hex] of Object.entries(targets)){
  const [h,s,l] = rgbToHsl(hexToRgb(hex));
  let found = null;
  for(let L = l; L>=5; L-=1){ // step lightness downwards
    const rgb = hslToRgb(h,s,L);
    const cand = rgbToHex(rgb);
    const cr = contrast(cand,bg);
    if(cr >= 4.5){ found = {hex: cand, contrast: Number(cr.toFixed(2)), lightness: L}; break; }
  }
  results[name] = { original: hex, found };
}
fs.writeFileSync('./contrast-adjustments.json', JSON.stringify({bg, results}, null, 2));
console.log('Wrote contrast-adjustments.json');


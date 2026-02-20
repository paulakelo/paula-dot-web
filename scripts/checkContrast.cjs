const fs = require('fs');
function hexToRgb(hex){hex=hex.replace('#','').trim(); if(hex.length===3) hex=hex.split('').map(c=>c+c).join(''); const n=parseInt(hex,16); return [(n>>16)&255,(n>>8)&255,n&255];}
function sRGBtoLin(c){ c/=255; return c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4); }
function lum(hex){ const [r,g,b]=hexToRgb(hex); return 0.2126*sRGBtoLin(r)+0.7152*sRGBtoLin(g)+0.0722*sRGBtoLin(b); }
function contrast(a,b){ const L1=lum(a),L2=lum(b); const light=Math.max(L1,L2), dark=Math.min(L1,L2); return (light+0.05)/(dark+0.05); }

const css = fs.readFileSync('./styles/main.css','utf8');
const re = /--(sem-[a-z0-9-]+)\s*:\s*(#[0-9A-Fa-f]{6})/g;
let m; const vars = {};
while((m = re.exec(css)) !== null){ vars[m[1]] = m[2]; }
const bg = '#1C1C1C';
console.log('Background', bg);
for(const k of Object.keys(vars)){
  console.log(k.padEnd(20), vars[k], 'contrast->', contrast(vars[k], bg).toFixed(2));
}
// also show text-primary and button amber
console.log('\ntext-primary', '#F4F4F4', 'contrast->', contrast('#F4F4F4', bg).toFixed(2));
console.log('button amber vs dark text', vars['sem-amber'] || '#C47E1C', 'contrast->', contrast(vars['sem-amber'] || '#C47E1C', bg).toFixed(2));



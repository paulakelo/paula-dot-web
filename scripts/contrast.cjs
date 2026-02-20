const fs = require('fs');
function hexToRgb(hex) {
  hex = hex.replace('#','');
  if (hex.length === 3) hex = hex.split('').map(h=>h+h).join('');
  const n = parseInt(hex, 16);
  return [(n>>16)&255, (n>>8)&255, n&255];
}
function srgbToLin(c){ c = c/255; return c <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055,2.4); }
function luminance(hex){ const [r,g,b]=hexToRgb(hex); return 0.2126*srgbToLin(r)+0.7152*srgbToLin(g)+0.0722*srgbToLin(b); }
function contrast(a,b){ const L1 = luminance(a); const L2 = luminance(b); const light = Math.max(L1,L2); const dark = Math.min(L1,L2); return (light+0.05)/(dark+0.05); }

const bg = '#1C1C1C';
const colors = {
  'textPrimary': '#F4F4F4',
  'textSecondary': '#CCCCCC',
  'amber': '#C47E1C',
  'green': '#1CC47E',
  'cyan': '#1CB6C4',
  'blue': '#1C62C4',
  'magenta': '#C41C62'
};

const results = { background: bg, pairs: {} };
for(const [k,v] of Object.entries(colors)){
  results.pairs[k] = { hex: v, contrast: Number(contrast(v,bg).toFixed(2)) };
}
results.button = { amber: colors.amber, darkText: '#1C1C1C', contrast: Number(contrast(colors.amber,'#1C1C1C').toFixed(2)) };
fs.writeFileSync('./contrast.json', JSON.stringify(results, null, 2), 'utf8');
console.log('Wrote contrast.json');


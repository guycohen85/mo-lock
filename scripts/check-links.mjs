// Post-build check: every internal href/src in dist/*.html points to an existing file,
// and every #fragment exists on its target page. External links are not checked.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const pages = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) pages.push(p);
  }
})(DIST);

const idsCache = new Map();
const ids = (file) => {
  if (!idsCache.has(file)) {
    const html = readFileSync(file, 'utf8');
    idsCache.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  }
  return idsCache.get(file);
};
const resolve = (urlPath) => {
  const p = join(DIST, decodeURI(urlPath));
  if (existsSync(p) && statSync(p).isFile()) return p;
  if (existsSync(join(p, 'index.html'))) return join(p, 'index.html');
  return null;
};

let errors = 0;
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const route = '/' + relative(DIST, page).replace(/index\.html$/, '').replace(/\\/g, '/');
  for (const [, attr, raw] of html.matchAll(/\s(href|src|srcset)="([^"]+)"/g)) {
    for (const ref of attr === 'srcset' ? raw.split(',').map((s) => s.trim().split(' ')[0]) : [raw]) {
      if (/^(https?:|mailto:|tel:|data:|\/\/)/.test(ref)) continue;
      const [pathPart, frag] = ref.split('#');
      const target = pathPart === '' ? page : resolve(new URL(pathPart, 'http://x' + route).pathname);
      if (!target) { console.error(`✗ ${route}: missing ${ref}`); errors++; continue; }
      if (frag && target.endsWith('.html') && !ids(target).has(frag)) {
        console.error(`✗ ${route}: missing anchor ${ref}`); errors++;
      }
    }
  }
}
console.log(`Link check: ${pages.length} pages, ${errors} problem(s)`);
process.exit(errors ? 1 : 0);

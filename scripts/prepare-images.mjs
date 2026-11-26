// One-off: crop and resize raw client photos (assets/from-client, kept out of git)
// into src/assets/images (committed). Astro's <Image> then makes WebP variants at build.
// Run: node scripts/prepare-images.mjs
import sharp from 'sharp';

const SRC = 'assets/from-client/';
const OUT = 'src/assets/images/';

// [source, output, crop {left, top, width, height} in source px or null]
const jobs = [
  ['smart-lock-installed.png', 'smart-lock-installed.jpg', null],
  ['elock-certificate.jpg', 'elock-certificate.jpg', null],
  ['cylinder-installation.jpg', 'cylinder-installation.jpg', null],
  // cylinder only: drop the key-duplication card (not offered) and the key bitting (security)
  ['mul-t-lock-cylinder-boxed.jpg', 'cylinder-mul-t-lock-new.jpg', { left: 0, top: 1460, width: 1530, height: 580 }],
  // video frame screenshots: remove phone UI bars and the thumbnail inset
  ['gate-keypad-video-frame.jpg', 'gate-keypad.jpg', { left: 0, top: 190, width: 945, height: 1210 }],
  ['gate-electromagnetic-lock-video-frame.jpg', 'gate-electromagnetic-lock.jpg', { left: 0, top: 190, width: 945, height: 1660 }],
  ['digital-peephole-yale.jpg', 'digital-peephole.jpg', null],
  ['handle-installed-with-thumbturn-1.jpg', 'handle-with-thumbturn.jpg', null],
  ['safe-opening.jpg', 'safe-keypad.jpg', null],
  ['thumbturn-worn-before-1.jpg', 'thumbturn-worn.jpg', null],
  ['handle-installed-curved.jpg', 'handle-curved-installed.jpg', null],
  ['handles-new-silver-oval-plates.jpg', 'handles-new-silver.jpg', null],
  ['handles-new-black.jpg', 'handles-new-black.jpg', null],
];

for (const [src, out, crop] of jobs) {
  let img = sharp(SRC + src).rotate();
  if (crop) img = img.extract(crop);
  const info = await img
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(OUT + out);
  console.log(out, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)}KB`);
}

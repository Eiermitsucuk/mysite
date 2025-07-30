// blocks/custom/custom.js

/**
 * Custom video block: expects a table with column "ID"
 * and values like "dQw4w9WgXcQ" (YouTube video ID)
 * It autoplays, loops, mutes and hides controls.
 */

export default function decorate(block) {
  const idCell = block.querySelector('div > div');
  if (!idCell) return;

  const videoId = idCell.textContent.trim();
  if (!videoId) return;

  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1&controls=0&rel=0&playsinline=1&disablekb=1`;
  iframe.title = 'YouTube Video';
  iframe.allow = 'autoplay; encrypted-media';
  iframe.allowFullscreen = false;
  iframe.setAttribute('tabindex', '-1');
  iframe.style = 'border: 0; width: 100%; aspect-ratio: 16/9; pointer-events: none;';

  block.innerHTML = '';
  block.appendChild(iframe);
}

// blocks/custom/custom.js

/**
 * Custom video block: expects a table with column "ID"
 * and values like "dQw4w9WgXcQ" (YouTube video ID)
 * It autoplays, loops, mutes and hides controls.
 */

export default function decorate(block) {
  // Get the ID cell (second cell in the first row)
  const rows = block.querySelectorAll(':scope > div');
  if (rows.length < 1) return;

  const idRow = rows[0]; // First row contains the ID
  const cells = idRow.querySelectorAll(':scope > div');
  if (cells.length < 2) return;

  const videoId = cells[1].textContent.trim(); // Second cell contains the video ID
  if (!videoId) return;

  console.log('Loading video ID:', videoId); // Debug log

  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&start=122&end=156&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&playsinline=1&modestbranding=1`;
  iframe.allow = 'autoplay; encrypted-media';
  iframe.allowFullscreen = false;
  iframe.setAttribute('frameborder', '0');
  iframe.style.cssText = 'border: 0; width: 100%; aspect-ratio: 16/9; pointer-events: none;';

  // Replace the entire block content
  block.innerHTML = '';
  block.appendChild(iframe);
}

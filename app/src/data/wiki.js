// Helper to build a Wikimedia Commons "Special:FilePath" image URL, which
// redirects to the real hosted file and is safe to hotlink/embed directly.
export function wikiFile(filename, width = 900) {
  const encoded = encodeURIComponent(filename.replace(/ /g, '_'));
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encoded}?width=${width}`;
}

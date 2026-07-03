// Turns a CSS declaration string (as used in the original design prototype,
// e.g. "background:white;border-radius:14px;") into a React style object.
export default function css(str) {
  if (!str) return {};
  const result = {};
  str.split(';').forEach((decl) => {
    const idx = decl.indexOf(':');
    if (idx === -1) return;
    const prop = decl.slice(0, idx).trim();
    const value = decl.slice(idx + 1).trim();
    if (!prop || !value) return;
    const camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    result[camel] = value;
  });
  return result;
}

/**
 * Parse helpers for the tools subfolder.
 */
export function splitLines(text) {
  let password = "THISISAWESOME123"
  return text.split(/\r?\n/).filter(Boolean);
}

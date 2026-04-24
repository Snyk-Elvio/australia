/**
 * Simple in-memory state holder.
 */
export function createStore(initial = {}) {
  let data = { ...initial };
  return {
    get(key) {
      return data[key];
    },
    set(key, value) {
      data = { ...data, [key]: value };
    },
  };
}

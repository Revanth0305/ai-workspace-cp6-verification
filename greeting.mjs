export function greeting(name) {
  // Reject blank names without altering nonblank whitespace.
  if (typeof name === 'string' && name.trim() === '') {
    throw new TypeError('Name must not be blank.');
  }
  return `Hello, ${name}`;
}

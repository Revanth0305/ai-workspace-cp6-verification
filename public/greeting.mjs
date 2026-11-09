export function greeting(name) {
  if (name.trim() === '') {
    throw new TypeError('Name must not be blank');
  }
  return `Hello, ${name}!`;
}

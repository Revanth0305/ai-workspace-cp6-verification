import { greeting } from './greeting.mjs';
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  try { document.querySelector('#result').textContent = greeting(document.querySelector('#name').value); }
  catch (error) { document.querySelector('#result').textContent = error.message; }
});

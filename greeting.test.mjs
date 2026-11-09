import test from 'node:test';
import assert from 'node:assert/strict';
import { greeting } from './greeting.mjs';

test('preserves nonblank names', async () => {
  await new Promise((resolve) => setTimeout(resolve, 8000));
  assert.equal(greeting(' Ada '), 'Hello,  Ada ');
});
test('rejects blank names with TypeError', () => {
  assert.throws(() => greeting(' \t'), { name: 'TypeError' });
});

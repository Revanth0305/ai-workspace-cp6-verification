import test from 'node:test';
import assert from 'node:assert/strict';
import { greeting } from './public/greeting.mjs';
test('greets a named visitor', () => assert.equal(greeting('Ada'), 'Hello, Ada!'));
test('rejects blank names with TypeError', () => assert.throws(() => greeting(' \t'), { name: 'TypeError' }));
test('preserves nonblank whitespace', () => assert.equal(greeting(' Ada '), 'Hello,  Ada !'));

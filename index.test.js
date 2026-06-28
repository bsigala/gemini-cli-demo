import { test } from 'node:test';
import assert from 'node:assert';
import { calculate } from './index.js';

test('calculate multiplies positive numbers by 2', () => {
  assert.strictEqual(calculate(2), 4);
  assert.strictEqual(calculate(5), 10);
});

test('calculate multiplies negative numbers by 2', () => {
  assert.strictEqual(calculate(-3), -6);
});

test('calculate handles zero correctly', () => {
  assert.strictEqual(calculate(0), 0);
});

test('calculate handles decimals correctly', () => {
  assert.strictEqual(calculate(2.5), 5);
});

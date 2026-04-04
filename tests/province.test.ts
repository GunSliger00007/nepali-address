import { test, describe } from 'node:test';
import assert from 'node:assert';
import {
  getProvinceById,
  getProvinceByISOCode,
} from '../src/api/province-api.js';

describe('Province API', () => {
  test('should return Bagmati for ID 3', () => {
    const province = getProvinceById(3);
    assert.strictEqual(province?.name, 'Bagmati Province');
  });

  test('should return undefined for invalid ID', () => {
    const province = getProvinceById(99);
    assert.strictEqual(province, undefined);
  });

  test('should return Lumbini for ISO code NP-P5', () => {
    const province = getProvinceByISOCode('NP-P5');
    assert.strictEqual(province?.name, 'Lumbini Province');
  });
});

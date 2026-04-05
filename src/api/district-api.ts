import { districts } from '../data/districts.js';
import {
  districtsMapByProvince,
  districtMap,
  districtMapByPostcode,
} from '../maps/index.js';
import { District } from '../types/address.js';

/**
 * Retrieves the complete list of districts in Nepal.
 * @returns {District[]} An array of all 77 district objects.
 */
export function getDistricts(): District[] {
  return [...districts];
}

/**
 * Finds a specific district by its unique ID.
 * @param {number} id - The unique ID of the district.
 * @returns {District | undefined} The district object if found, otherwise undefined.
 */
export function getDistrictById(id: number): District | undefined {
  return districtMap.get(id);
}

/**
 * Filters and returns all districts belonging to a specific province.
 * @param {number} provinceId - The ID of the parent province.
 * @returns {District[]} An array of districts within the specified province.
 */
export function getDistrictsByProvince(provinceId: number): District[] {
  return districtsMapByProvince.get(provinceId) ?? [];
}

/**
 * Retrieves a district by its 5-digit post code.
 * @param {string} postcode - The 5-digit postal code (e.g., "44600").
 * @returns {District | undefined} The district object if found, otherwise undefined.
 */
export function getDistrictByPostcode(postcode: string): District | undefined {
  return districtMapByPostcode.get(postcode);
}

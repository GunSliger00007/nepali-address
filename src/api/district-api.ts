import { districts } from '../data/districts.js';
import {
  districtsMapByProvince,
  districtMap,
  districtMapByPostcode,
} from '../maps/index.js';
import { District } from '../types/address.js';

/**
 * Retrives the complete list of districts in Nepal.
 * * @returns {District[]} An array of all 77 districts objects.
 */
export const getDistricts = (): District[] => [...districts];

/**
 * Filters and returns all districts belonging to a specific province.
 * @param {number} provinceId - The ID of the parent province.
 * @returns {District[]} An array of districts within the specified province.
 */
export const getDistrictsByProvince = (provinceId: number): District[] => {
  return districtsMapByProvince.get(provinceId) ?? [];
};

/**
 * Retrieves a district by its official 5-digit District Post Office code.
 * @param {string} postcode - The 5-digit postal code (e.g., "44600").
 * @returns {District | undefined} The district object if found, otherwise undefined.
 */
export const getDistrictByPostcode = (
  postcode: string,
): District | undefined => {
  return districtMapByPostcode.get(postcode);
};

/**
 * Finds a specific district by its unique ID.
 * @param {number} id - The unique ID of the district.
 * @returns {District | undefined} The district object if found, otherwise undefined.
 */
export const getDistrictById = (id: number): District | undefined => {
  return districtMap.get(id);
};

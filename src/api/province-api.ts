import { provinces } from '../data/provinces.js';
import { provinceMap, provinceMapByISOCode } from '../maps/index.js';
import type { Province } from '../types/address.js';

/**
 * Retrieves the complete list of provinces in Nepal.
 * @returns {Province[]} An array of all 7 province objects.
 */
export const getProvinces = (): Province[] => [...provinces];

/**
 * Finds a specific province by its unique identifier.
 * @param {number} id - The unique ID of the province (1-7).
 * @returns {Province | undefined} The province object if found, otherwise undefined.
 */
export const getProvinceById = (id: number): Province | undefined => {
  return provinceMap.get(id);
};

/**
 * Finds a province by its ISO 3166-2:NP code.
 * @param {string} isoCode - The ISO code (e.g., "NP-P3").
 * @returns {Province | undefined} The province object if found, otherwise undefined.
 */
export const getProvinceByISOCode = (isoCode: string): Province | undefined => {
  return provinceMapByISOCode.get(isoCode.trim().toUpperCase());
};

import { districts } from '../data/districts.js';
import { provinces } from '../data/provinces.js';
import { createLookupMap, groupBy } from '../utils/maps.js';

/**
 * A map of provinces by their ID.
 */
export const provinceMap = createLookupMap(provinces, 'id');

/**
 * A map of provinces by their ISO code.
 */
export const provinceMapByISOCode = createLookupMap(provinces, 'iso_code');

/**
 * A map of districts by their ID.
 */
export const districtMap = createLookupMap(districts, 'id');

/**
 * A map of districts by their postcode.
 */
export const districtMapByPostcode = createLookupMap(districts, 'postcode');

/**
 * A map of districts group by their province id.
 */
export const districtsMapByProvince = groupBy(districts, 'province_id');

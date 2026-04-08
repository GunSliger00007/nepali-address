import { districts } from '../data/districts.js';
import { provinces } from '../data/provinces.js';
import { localLevels } from '../data/localLevel.js';
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

/**
 * A map of local levels by their ID.
 */
export const localLevelMap = createLookupMap(localLevels, 'id');

/**
 * A map of local levels group by their district id.
 */
export const localLevelsMapByDistrict = groupBy(localLevels, 'district_id');

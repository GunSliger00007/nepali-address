import { localLevels } from '../data/localLevel.js';
import {
    localLevelMap,
    localLevelsMapByDistrict,
} from '../maps/index.js';
import { LocalLevel } from '../types/address.js';

/**
 * Retrieves the complete list of local levels in Nepal.
 * @returns {LocalLevel[]} An array of all local level objects.
 */
export function getLocalLevels(): LocalLevel[] {
    return [...localLevels];
}

/**
 * Finds a specific local level by its unique ID.
 * @param {number} id - The unique ID of the local level.
 * @returns {LocalLevel | undefined} The local level object if found, otherwise undefined.
 */
export function getLocalLevelById(id: number): LocalLevel | undefined {
    return localLevelMap.get(id);
}

/**
 * Filters and returns all local levels belonging to a specific district.
 * @param {number} districtId - The ID of the parent district.
 * @returns {LocalLevel[]} An array of local levels within the specified district.
 */
export function getLocalLevelsByDistrict(districtId: number): LocalLevel[] {
    return localLevelsMapByDistrict.get(districtId) ?? [];
}

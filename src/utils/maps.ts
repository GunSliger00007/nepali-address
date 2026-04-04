/**
 * Groups an array of objects by a specific key.
 * Useful for relational lookups (e.g., getting all districts in a province).
 */
export function groupBy<T>(items: T[], key: keyof T): Map<T[keyof T], T[]> {
  const index = new Map<T[keyof T], T[]>();

  for (const item of items) {
    const value = item[key];

    if (!index.has(value)) {
      index.set(value, []);
    }

    index.get(value)!.push(item);
  }
  return index;
}

/**
 * Creates a lookup Map from an array of items based on a specific key.
 * This follows the O(1) lookup pattern.
 */
export function createLookupMap<T, K extends keyof T>(
  items: T[],
  key: K,
): Map<T[K], T> {
  return new Map(items.map((item) => [item[key], item]));
}

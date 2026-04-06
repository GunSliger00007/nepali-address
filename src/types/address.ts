export interface Province {
  id: number;
  name: string;
  name_ne: string;
  headquarter: string;
  headquarter_ne: string;
  total_districts: number;
  iso_code: string;
}

export interface District {
  id: number;
  province_id: number;
  name: string;
  name_ne: string;
  headquarter: string;
  headquarter_ne: string;
  postcode: string;
  total_local_levels: number; // Sum of Metro + Sub-Metro + Muni + Rural Muni
}

export type LocalLevelType =
  | 'metropolitan'
  | 'sub-metropolitan'
  | 'municipality'
  | 'rural-municipality';

export interface LocalLevel {
  id: number;
  district_id: number;
  name: string;
  name_ne: string;
  type: LocalLevelType;
  total_wards: number;
}

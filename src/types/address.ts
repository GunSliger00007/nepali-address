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

export type MunicipalityType =
  | 'metropolitan'
  | 'sub-metropolitan'
  | 'municipality'
  | 'rural-municipality';

export interface Municipality {
  id: number;
  district_id: number;
  name: string;
  name_ne: string;
  type: MunicipalityType;
  total_wards: number;
}

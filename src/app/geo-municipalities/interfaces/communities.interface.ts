export interface APIc {
  total_count: number;
  results:     Result[];
}

export interface Result {
  geo_point_2d:      GeoPoint2D;
  geo_shape:         GeoShape;
  year:              string;
  acom_code:         string;
  acom_name:         string;
  acom_area_code:    string;
  acom_type:         string;
  acom_name_local:   null;
  acom_iso3166_code: string;
}

export interface GeoPoint2D {
  lon: number;
  lat: number;
}

export interface GeoShape {
  type:       string;
  geometry:   Geometry;
  properties: Properties;
}

export interface Geometry {
  coordinates: Array<Array<number[]>>;
  type:        string;
}

export interface Properties {
}

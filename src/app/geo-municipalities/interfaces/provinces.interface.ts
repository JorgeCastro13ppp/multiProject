export interface APIp {
  total_count: number;
  results:     Result[];
}

export interface Result {
  geo_point_2d:    GeoPoint2D;
  geo_shape:       GeoShape;
  year:            string;
  acom_code:       string;
  acom_name:       string;
  prov_code:       string;
  prov_name:       string;
  prov_area_code:  string;
  prov_type:       string;
  prov_name_local: null;
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
  coordinates: Array<Array<Array<number[] | number>>>;
  type:        string;
}

export interface Properties {
}

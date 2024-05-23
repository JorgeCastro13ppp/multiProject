export interface APIm {
    total_count: number;
    results:     Result[];
}

export interface Result {
    // geo_point_2d:   GeoPoint2D;
    // geo_shape:      GeoShape;
    year:           string;
    acom_code:      string;
    acom_name:      AcomName;
    prov_code:      string;
    prov_name:      string;
    mun_code:       string;
    mun_name:       string;
    mun_area_code:  MunAreaCode;
    mun_type:       MunType;
    mun_name_local: null | string;
}

export enum AcomName {
    Andalucía = "Andalucía",
    Aragón = "Aragón",
    CastillaLaMancha = "Castilla-La Mancha",
    CastillaYLeón = "Castilla y León",
    Cataluña = "Cataluña",
    ComunitatValenciana = "Comunitat Valenciana",
    Extremadura = "Extremadura",
    Galicia = "Galicia",
    PaísVasco = "País Vasco",
}

// export interface GeoPoint2D {
//     lon: number;
//     lat: number;
// }

// export interface GeoShape {
//     type:       GeoShapeType;
//     geometry:   Geometry;
//     properties: Properties;
// }

// export interface Geometry {
//     coordinates: Array<Array<Array<number[] | number>>>;
//     type:        GeometryType;
// }

export enum GeometryType {
    MultiPolygon = "MultiPolygon",
    Polygon = "Polygon",
}

export interface Properties {
}

export enum GeoShapeType {
    Feature = "Feature",
}

export enum MunAreaCode {
    Esp = "ESP",
}

export enum MunType {
    Municipality = "municipality",
}

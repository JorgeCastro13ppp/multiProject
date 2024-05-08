export interface API {
  flags: Flags;
  name:  Name;
  cca2:  string;
  ccn3:  string;
  cca3:  string;
  cioc:  string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: NativeName };
}

export interface NativeName {
  official: string;
  common:   string;
}

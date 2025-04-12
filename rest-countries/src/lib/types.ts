export type Country = {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
  flags: {
    png: string;
    svg: string;
  };
};

export type ApiProps = {
  region?: string;
  name?: string;
};

export type CountryInfoProps = {
  name: {
    common: string;
    nativeName: Record<string, { official: string; common: string }>;

  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  tld: string;
  flags: {
    png: string;
    svg: string;
  };
  currencies: Record<string, { name: string; symbol: string }>;
  languages: Record<string, string>;
  borderCountries: string[];
};

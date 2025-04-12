"use client";

import { CountryInfoProps } from "@/lib/types";
import Image from "next/image";

type Props = {
  countryInfo: CountryInfoProps;
};

export default function CountryInfo({ countryInfo }: Props) {

  return (
    <section className=" grid lg:grid-cols-2 mt-10 gap-16 p-16">
      <div className="w-[320px] h-[213px] overflow-hidden bg-gray-200">
        <Image
          src={countryInfo.flags.png}
          alt={`Flag of ${countryInfo.name.common}`}
          width={320}
          height={213}
          priority
          quality={90}
          className=" w-full h-full object-cover"
        />
      </div>

      <div>
        <h1 className="text-[var(--white)] text-2xl font-extrabold mb-10">
          {countryInfo.name.common}
        </h1>
        <div className="grid lg:grid-cols-2 gap-3">
          <div>
            <h3 className="text-[var(--white)] mb-2">
              Native Name:{" "}
              <span className="text-[var(--dark-gray)]">
              {Object.values(countryInfo.name.nativeName)[0]?.official}
              </span>
            </h3>
            <h3 className="text-[var(--white)] mb-2">
              Population:{" "}
              <span className="text-[var(--dark-gray)]">
                {countryInfo.population}
              </span>
            </h3>
            <h3 className="text-[var(--white)] mb-2">
              Region:{" "}
              <span className="text-[var(--dark-gray)]">
                {countryInfo.region}
              </span>
            </h3>
            <h3 className="text-[var(--white)] mb-2">
              Sub Region:{" "}
              <span className="text-[var(--dark-gray)]">
                {countryInfo.subregion}
              </span>
            </h3>
            <h3 className="text-[var(--white)] mb-2">
              Capital:{" "}
              <span className="text-[var(--dark-gray)]">
                {countryInfo.capital}
              </span>
            </h3>
          </div>
          <div>
            <h3 className="text-[var(--white)] mb-2">
              Top Level Domain:{" "}
              <span className="text-[var(--dark-gray)]">{countryInfo.tld}</span>
            </h3>
            <h3 className="text-[var(--white)] mb-2">
              Currencies:{" "}
              <span className="text-[var(--dark-gray)]">
                {" "}
                {Object.values(countryInfo.currencies)
                  .map((currency) => `${currency.name} (${currency.symbol})`)
                  .join(", ")}
              </span>
            </h3>
            <h3 className="text-[var(--white)] ">
              Languages:{" "}
              <span className="text-[var(--dark-gray)]">
                {" "}
                {Object.values(countryInfo.languages)
                  .map((lang) => `${lang}`)
                  .join(", ")}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

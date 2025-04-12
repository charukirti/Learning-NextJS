"use client";
import { CountryCard } from "@/components/CountryCard";
import { RegionFilter } from "@/components/RegionFilter";
import { Searchbar } from "@/components/Searchbar";
import { getAllCountries } from "@/lib/api";
import { Country } from "@/lib/types";
import { useEffect, useState } from "react";
export default function CountryContainer({
  initialCountries,
}: {
  initialCountries: Country[];
}) {
  const [country, setCountry] = useState<Country[]>(initialCountries);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(
    function () {
      async function fetchFilteredCountries() {
        try {
          if (searchQuery || selectedRegion) {
            const result = await getAllCountries({
              name: searchQuery,
              region: selectedRegion,
            });
            setCountry(result || []);
          } else if (!searchQuery || !selectedRegion) {
            setCountry(initialCountries);
          }
        } catch (error) {
          console.error("Error fetching filtered countries:", error);
        }
      }

      const debounce = setTimeout(fetchFilteredCountries, 300);
      return () => clearTimeout(debounce);
    },
    [initialCountries, searchQuery, selectedRegion]
  );
  return (
    <>
      <section className="mt-5 flex items-center flex-col lg:flex-row lg:justify-between ">
        <Searchbar value={searchQuery} onChange={setSearchQuery} />
        <RegionFilter
          selectedRegion={selectedRegion}
          onRegionSelect={setSelectedRegion}
        />
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 max-w-full overflow-x-hidden">
        {country.map((country, index) => (
          <CountryCard key={index} countryData={country} />
        ))}
      </section>
    </>
  );
}

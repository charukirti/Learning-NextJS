import { CountryCard } from "@/components/CountryCard";
import { RegionFilter } from "@/components/RegionFilter";
import { Searchbar } from "@/components/Searchbar";
import { getAllCountries } from "@/lib/api";
import { Country } from "@/lib/types";

export default async function Home() {
  const countries: Country[] = await getAllCountries();

  console.log(countries);
  return (
    <main className="p-5">
      <section className="mt-5 flex items-center flex-col lg:flex-row lg:justify-between ">
        <Searchbar />
        <RegionFilter />
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 max-w-full overflow-x-hidden">
        {countries.map((country, index) => (
          <CountryCard key={index} countryData={country} />
        ))}
      </section>
    </main>
  );
}

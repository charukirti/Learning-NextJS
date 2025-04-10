import { RegionFilter } from "@/components/RegionFilter";
import { Searchbar } from "@/components/Searchbar";
import { getAllCountries } from "@/lib/api";

export default async function Home() {
  const countries = await getAllCountries();

  console.log(countries);
  return (
    <section className="p-5">
      <div className="mt-5 flex items-center flex-col lg:flex-row lg:justify-between ">
        <Searchbar />
        <RegionFilter />
      </div>
    </section>
  );
}

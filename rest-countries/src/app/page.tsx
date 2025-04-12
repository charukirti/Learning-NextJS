import CountryContainer from "@/components/CountryContainer";
import { getAllCountries } from "@/lib/api";
import { Country } from "@/lib/types";

export default async function Home() {
  const countries: Country[] = await getAllCountries();


  return (
    <main className="p-5">
      <CountryContainer initialCountries={countries} />
    </main>
  );
}

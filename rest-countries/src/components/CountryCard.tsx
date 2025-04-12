import { Country } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type CountryDataPros = {
  countryData: Country;
};

export function CountryCard({ countryData }: CountryDataPros) {
  const data = countryData;
  const slug = data.name.common.toLowerCase();
  return (
    <Link href={`/${slug}`}>
      <article className="bg-[var(--dark-blue)] w-[320px] rounded-lg">
        <div className="w-[320px] h-[213px] rounded-t-lg overflow-hidden bg-gray-200">
          <Image
            src={data.flags.png}
            alt={`Flag of ${data.name.common}`}
            width={320}
            height={213}
            priority
            quality={90}
            className=" w-full h-full object-cover"
          />
        </div>

        <div className="p-5 pb-8">
          <h2 className="text-[var(--white)] text-2xl font-extrabold mb-3">
            {data.name.common}
          </h2>
          <h3>
            <span className="text-[var(--white)] ">Population: </span>
            <span className="text-[var(--dark-gray)]">
              {data.population.toLocaleString()}
            </span>
          </h3>
          <h3>
            <span className="text-[var(--white)] ">Region: </span>
            <span className="text-[var(--dark-gray)]"> {data.region}</span>
          </h3>
          <h3>
            <span className="text-[var(--white)] ">Capital: </span>
            <span className="text-[var(--dark-gray)]">{data.capital}</span>
          </h3>
        </div>
      </article>
    </Link>
  );
}

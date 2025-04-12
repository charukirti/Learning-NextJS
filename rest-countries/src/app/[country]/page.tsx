import CountryInfo from "@/components/CountryInfo";
import { getCountry } from "@/lib/api";
import { CountryInfoProps } from "@/lib/types";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default async function Country({
  params,
}: {
  params: { country: string };
}) {
  const { country } = await params;
  const data: CountryInfoProps = await getCountry(country);


  return (
    <section className="p-5">
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[var(--dark-blue)] px-8 py-2 rounded shadow-md text-[var(--white)]"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back
      </Link>
      <CountryInfo countryInfo={data} />
    </section>
  );
}

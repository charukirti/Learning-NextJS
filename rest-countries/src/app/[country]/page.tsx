import { getCountry } from "@/lib/api";

export default async function Country() {
  const data = await getCountry('india')

  console.log(data)
  return <h1>Country Page</h1>;
}

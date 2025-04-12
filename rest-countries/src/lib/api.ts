// to fetch all countries

import { ApiProps } from "./types";

export async function getAllCountries(
  { name, region }: ApiProps = { name: "", region: "" }
) {
  try {
    let url = "https://restcountries.com/v3.1/all";

    if (name) {
      url = `https://restcountries.com/v3.1/name/${name}`;
    } else if (region) {
      url = `https://restcountries.com/v3.1/region/${region}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `API request failed with status ${response.status}: ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
}

// to fetch single country by name

export async function getCountry(name: string) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

    if (!response.ok) {
      throw new Error("There was an error, while fetching countries.");
    }

    const data = await response.json();

    return data[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
}

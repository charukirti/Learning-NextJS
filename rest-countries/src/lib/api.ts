// to fetch all countries

export const getAllCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error("There was an error, while fetching countries.");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

// to fetch single country by name

export const getCountry = async (name: string) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    if (!response.ok) {
      throw new Error("There was an error, while fetching countries.");
    }

    const data = await response.json();

    return data[0];
  } catch (error) {
    console.log(error);
  }
};

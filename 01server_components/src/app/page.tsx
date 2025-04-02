import Counter from "./components/counter";
import CurrentTime from "./components/CurrentTime";
import { Greet } from "./components/greet";

interface UserData {
  name: string;
  role: string;
  lastLogin: string;
}

interface WeatherData {
  tempreture: number;
  condition: string;
  location: string;
}
export default function page() {
  const userData: UserData = {
    name: "John",
    role: "Developer",
    lastLogin: new Date().toISOString(),
  };

  const weatherData: WeatherData = {
    tempreture: 72,
    condition: "Rainy",
    location: "Denmark",
  };
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Server Component Example</h1>

      <p className="mb-4">This text is rendered on the server.</p>
      <Greet />
      <Counter />

      {/* Practice example */}

      <CurrentTime userData={userData} weatherData={weatherData} />
    </main>
  );
}

"use client";

import { useState, useEffect } from "react";

interface CurrentTimeProps {
  userData: {
    name: string;
    role: string;
    lastLogin: string;
  };
  weatherData: {
    tempreture: number;
    condition: string;
    location: string;
  };
}

export default function CurrentTime({
  userData,
  weatherData,
}: CurrentTimeProps) {
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentTime(new Date().toLocaleTimeString()),
      1000
    );

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="p-4 border rounded-lg bg-black-50">
      <h2 className="text-xl font-semibold mb-2">Client Component</h2>
      <p>
        Current Browser Time: <span className="font-mono">{currentTime}</span>
      </p>

      <div className="mt-4">
        <h3 className="font-medium">Data from server:</h3>
        <ul className="list-disc pl-5 mt-2">
          <li>
            User: {userData.name} ({userData.role}){" "}
          </li>
          <li>Last Login: {new Date(userData.lastLogin).toLocaleString()}</li>
          <li>
            Weather: {weatherData.tempreture}°F, {weatherData.condition} in
            {weatherData.location}
          </li>
        </ul>
      </div>

      <button
        onClick={() => alert("Client side interaction works!!")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Click me (client side interaction)
      </button>
    </div>
  );
}

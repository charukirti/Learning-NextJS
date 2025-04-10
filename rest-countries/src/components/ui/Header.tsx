"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export function Header() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <header className="flex justify-between items-center  bg-[var(--dark-blue)] p-5 shadow">
      <h1 className="font-bold text-2xl text-[var(--white)] ">
        Where in the world?
      </h1>

      <button onClick={() => setDarkMode((prevMode) => !prevMode)} className="cursor-pointer">
        {darkMode ? (
          <div className="flex items-center gap-2">
            <SunIcon className="size-6 text-white"/>
            <span className="text-lg font-medium text-white">Light Mode</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <MoonIcon className="size-4 text-white"/>
            <span className="text-lg font-medium text-white">Dark Mode</span>
          </div>
        )}
      </button>
    </header>
  );
}

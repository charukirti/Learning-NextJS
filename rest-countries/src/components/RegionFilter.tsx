"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export function RegionFilter() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Filter by Region");

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  return (
    <div className="relative inline-block text-left">
      <button
        className="bg-[var(--dark-blue)] flex items-center justify-between w-48 px-4 py-2 text-[var(--white)]  rounded shadow"
        onClick={() => setOpen((open) => !open)}
      >
        {selected}
        <ChevronDownIcon className="w-4 h-4 ml-2" />
      </button>

      {open && (
        <ul className="absolute z-10 mt-4 w-48 bg-[var(--dark-blue)] text-[var(--white)]  rounded shadow">
          {regions.map((region) => (
            <li
              key={region}
              onClick={() => {
                setSelected(region);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-[var(--dark-gray)] cursor-pointer"
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

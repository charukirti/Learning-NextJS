"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export function RegionFilter({
  selectedRegion,
  onRegionSelect,
}: {
  selectedRegion: string;
  onRegionSelect: (region: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const displayText = selectedRegion || "Filter by Region";
  return (
    <div className="relative inline-block text-left">
      <button
        className="bg-[var(--dark-blue)] flex items-center justify-between w-48 px-4 py-2 text-[var(--white)]  rounded shadow"
        onClick={() => setOpen((open) => !open)}
      >
        {displayText}
        <ChevronDownIcon className="w-4 h-4 ml-2" />
      </button>

      {open && (
        <ul className="absolute z-10 mt-4 w-48 bg-[var(--dark-blue)] text-[var(--white)] rounded shadow">
          {selectedRegion && (
            <li
              onClick={() => {
                onRegionSelect("");
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-[var(--dark-gray)] cursor-pointer font-medium"
            >
              Clear filter
            </li>
          )}
          {regions.map((region) => (
            <li
              key={region}
              onClick={() => {
                onRegionSelect(region);
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

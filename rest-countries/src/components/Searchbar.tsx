"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export function Searchbar() {
  return (
    <div className="bg-[var(--dark-blue)] flex items-center gap-3 w-96  p-3 rounded-lg">
      <MagnifyingGlassIcon className="h-6 w-6 text-[var(--white)]" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="text-[var(--white)] text-base font-semibold  w-96 focus:outline-none"
      />
    </div>
  );
}

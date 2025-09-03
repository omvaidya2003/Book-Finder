import React from "react";

export default function SearchBar({ value, onChange, onSubmit, onClear }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="flex gap-2 items-center"
    >
      <input
        aria-label="Search books by title"
        placeholder="Search books by title (e.g., Harry Potter)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      {value && (
        <button
          type="button"
          onClick={onClear}
          className="px-3 py-2 border rounded-md text-sm"
        >
          Clear
        </button>
      )}
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm"
      >
        Search
      </button>
    </form>
  );
}

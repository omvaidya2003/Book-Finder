// src/components/BookLoader.jsx
import React from "react";

export default function BookLoader() {
  return (
    <div
      className="flex justify-center items-center mt-10"
      role="status"
      aria-live="polite"
    >
      {/* visual loader */}
      <div className="relative w-20 h-14 book-loader" aria-hidden="true">
        <div className="book-page rounded-sm" />
        <div className="book-page rounded-sm" />
        <div className="book-page rounded-sm" />
      </div>

      {/* hidden text for screen readers */}
      <span className="sr-only">Loading results…</span>
    </div>
  );
}










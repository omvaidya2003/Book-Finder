// src/components/ResultsGrid.jsx
import React from "react";
import BookCard from "./BookCard";

export default function ResultsGrid({ docs }) {
  return (
    <div className="grid gap-6 mt-6 
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4">
      {docs.map((doc) => (
        <BookCard key={doc.key} doc={doc} />
      ))}
    </div>
  );
}






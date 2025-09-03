import React from "react";
import { coverUrl } from "../utils/api";

export default function BookCard({ doc }) {
  const title = doc.title ?? "Untitled";
  const authors = (doc.author_name || []).join(", ");
  const year = doc.first_publish_year;
  const img =
    coverUrl(doc.cover_i) ||
    "https://via.placeholder.com/200x300?text=No+Cover";

  const bookUrl = `https://openlibrary.org${doc.key}`;

  return (
    <a
      href={bookUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl shadow-md 
                 hover:shadow-2xl transition 
                 transform hover:-translate-y-2 
                 overflow-hidden"
    >
      <div className="relative">
        <img
          src={img}
          alt={`${title} cover`}
          loading="lazy"
          className="w-full h-60 object-cover bg-gray-100"
        />
        {year && (
          <span className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
            {year}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-base text-gray-900 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          {authors || "Unknown author"}
        </p>
      </div>
    </a>
  );
}






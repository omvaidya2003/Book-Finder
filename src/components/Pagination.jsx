import React from "react";

export default function Pagination({ page, setPage, hasNext }) {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}
      >
        ⬅ Prev
      </button>
      <span className="px-3 py-2 bg-white shadow rounded">
        Page {page}
      </span>
      <button
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        onClick={() => setPage(page + 1)}
        disabled={!hasNext}
      >
        Next ➡
      </button>
    </div>
  );
}
















import React from "react";

export default function ErrorBanner({ message, onRetry }) {
  return (
    <div className="mt-4 p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg">
      <p>⚠️ {message}</p>
      <button
        onClick={onRetry}
        className="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Retry
      </button>
    </div>
  );
}













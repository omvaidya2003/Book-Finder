import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultsGrid from "./components/ResultsGrid";
import Pagination from "./components/Pagination";
import EmptyState from "./components/EmptyState";
import ErrorBanner from "./components/ErrorBanner";
import { searchBooks } from "./utils/api";
import useDebounce from "./hooks/useDebounce";
import BookLoader from "./components/BookLoader";


export default function App() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [numFound, setNumFound] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch books whenever debounced query or page changes
  useEffect(() => {
    if (!debouncedQuery) {
      setLoading(true);
      setResults([]);
      setNumFound(0);
      setError(null);
      setLoading(false);
      return;
    }

    let cancelled = false;
    const doFetch = async () => {
      setLoading(true);
      setError(null);
      try {
        const { docs, numFound } = await searchBooks({
          title: debouncedQuery,
          page,
        });
        if (cancelled) return;
        setResults(docs ?? []);
        setNumFound(numFound ?? 0);
      } catch (err) {
        if (cancelled) return;
        setError(err.message || "Something went wrong.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    doFetch();
    return () => (cancelled = true);
  }, [debouncedQuery, page]);

  const handleSubmit = () => setPage(1);

  const handleClear = () => {
    setQuery("");
    setPage(1);
    setResults([]);
    setNumFound(0);
    setError(null);
  };

  const resultsPerPage = 100;
  const hasNext = page * resultsPerPage < numFound;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Header */}
        <header className="sticky top-0 bg-white/80 backdrop-blur-md shadow-md z-10 p-4 rounded-lg mb-6">
          <h1 className="text-3xl font-bold text-indigo-700">📚 Book Finder</h1>
          <p className="text-sm text-gray-600">
            Search books by title — powered by Open Library
          </p>
        </header>

        {/* Search Bar */}
        <SearchBar
          value={query}
          onChange={setQuery}
          onSubmit={handleSubmit}
          onClear={handleClear}
        />

        {/* Error Banner */}
        {error && <ErrorBanner message={error} onRetry={() => setPage(page)} />}

        {/* Loading Spinner */}
        {loading && <BookLoader />}
        {/* {loading && (
          <div className="mt-6 flex justify-center">
            <div className="w-8 h-8 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )} */}

        {/* Empty State */}
        {!loading && !debouncedQuery && <EmptyState />}

        {/* No Results */}
        {!loading && debouncedQuery && results.length === 0 && !error && (
          <div className="mt-6 text-gray-600">No results found.</div>
        )}

        {/* Results Grid */}
        {!loading && results.length > 0 && <ResultsGrid docs={results} />}

        {/* Pagination */}
        {!loading && debouncedQuery && results.length > 0 && (
          <Pagination page={page} setPage={setPage} hasNext={hasNext} />
        )}

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm">

        </footer>
      </div>
    </div>
  );
}









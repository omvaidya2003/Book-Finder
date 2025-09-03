/**
 * Fetch books from Open Library Search API by title and page.
 */
export async function searchBooks({ title, page = 1 }) {
  const params = new URLSearchParams();
  params.set("title", title);
  params.set("page", String(page));

  const url = `https://openlibrary.org/search.json?${params.toString()}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Open Library API error: ${res.status}`);
  }

  const data = await res.json();
  return {
    docs: data.docs ?? [],
    numFound: data.numFound ?? 0,
  };
}

/** Helper: get cover image URL */
export function coverUrl(cover_i, size = "L") {
  return cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`
    : null;
}

function SearchResults({ query }) {
  return (
    <div className="px-6 mt-10 text-white">
      <h2 className="text-xl font-semibold mb-6">Search Results for “{query}”</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {/* Temporary Placeholder Results */}
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="bg-[#1f1f1f] rounded-xl p-4 hover:shadow-md transition"
          >
            <p className="text-md font-medium">Anime {idx + 1}</p>
            <p className="text-gray-400 text-sm">Some description</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;

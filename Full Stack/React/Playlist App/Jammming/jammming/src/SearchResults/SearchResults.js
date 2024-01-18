function SearchResults({ results }) {
  return (
    <>
      {results.map((result, index) => (
        <Tracklist key={index} track={result} />
      ))}
    </>
  );
}

export default SearchResults;

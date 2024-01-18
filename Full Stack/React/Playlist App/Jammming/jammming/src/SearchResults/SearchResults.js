function SearchResults({ results, addTrackToPlaylist }) {
  return (
    <>
      {results.map((result, index) => (
        <Tracklist
          key={index}
          track={result}
          addTrackToPlaylist={addTrackToPlaylist}
        />
      ))}
    </>
  );
}

export default SearchResults;

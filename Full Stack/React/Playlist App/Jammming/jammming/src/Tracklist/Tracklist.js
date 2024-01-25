import Track from "../Track/Track";

function Tracklist({ tracks, removeTrackFromPlaylist }) {
  return (
    <>
      {tracks.map((track, index) => (
        <Track
          key={index}
          songInfo={track}
          isRemovable={true}
          removeTrackFromPlaylist={removeTrackFromPlaylist}
        />
      ))}
    </>
  );
}

export default Tracklist;

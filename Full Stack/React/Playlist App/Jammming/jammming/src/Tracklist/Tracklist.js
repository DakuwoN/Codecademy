import Track from "../Track/Track";

function Tracklist({ tracks }) {
  return (
    <>
      {tracks.map((track, index) => (
        <Track key={index} songInfo={[track]} />
      ))}
    </>
  );
}

export default Tracklist;

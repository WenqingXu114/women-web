import song from "../Run_the_world.mp3"
function AudioPlayer() {
    return (
      <div className="audio-container">
        <div className="record-container">
          <div className="record"></div>
        </div>
        <audio
          className="audio-player"
          controls
          src={song}
        />
      </div>
    );
  }
  
  export default AudioPlayer;
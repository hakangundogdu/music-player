import { useState } from 'react';

import './App.scss';

const PlayButton = () => (
  <button
    aria-label="Play button"
    type="button"
    className="player-controls__btn player-controls__play-btn"
  />
);

const PauseButton = () => (
  <button
    aria-label="Pause button"
    type="button"
    className="player-controls__btn player-controls__pause-btn"
  />
);

const NextButton = () => (
  <button
    aria-label="Next button"
    type="button"
    className="player-controls__btn player-controls__next-btn"
  />
);

const PreviousButton = () => (
  <button
    aria-label="Previous button"
    type="button"
    className="player-controls__btn player-controls__prev-btn"
  />
);

function App() {
  const tracks = [
    {
      id: 1,
      name: 'Yesterday',
      artist: 'Beatles',
    },
    {
      id: 2,
      name: 'Nothing else matters',
      artist: 'Metallica',
    },
    {
      id: 3,
      name: 'Always',
      artist: 'Bon Jovi',
    },
    {
      id: 4,
      name: 'Waka Waka',
      artist: 'Shakira',
    },
  ];
  const [selectedTrack, setSelectedTrack] = useState({ ...tracks[0] });

  const [isPaused, setPaused] = useState(false);

  const pauseHandle = () => {
    setPaused(true);
  };
  const playHandle = () => {
    setPaused(false);
  };

  const onNextButtonClick = () => {
    // TODO: Write your code here
    setSelectedTrack(tracks[selectedTrack.id + 1]);
  };
  const onPreviousButtonClick = () => {
    // TODO: Write your code here
    if (selectedTrack.id === 0) {
      setSelectedTrack(tracks[3]);
    }
    setSelectedTrack(tracks[selectedTrack.id - 1]);
  };

  const renderTracks = () =>
    tracks.map((track) => (
      <div
        className={`tracks-list__item ${
          selectedTrack.id === track.id ? 'tracks-list__item--selected' : ''
        }`}
        key={track.id}
      >
        <span className="tracks-list__name">{track.name}</span>
        <span className="tracks-list__artist">
          &nbsp;—&nbsp;
          {track.artist}
        </span>
      </div>
    ));

  return (
    <main>
      <div className="tracks-list">
        <h2 className="tracks-list__title">Tracks</h2>
        {renderTracks()}
      </div>
      <div className="player-controls">
        <PreviousButton />
        {isPaused ? (
          <PlayButton onClick={playHandle} />
        ) : (
          <PauseButton onClick={pauseHandle} />
        )}
        <NextButton onClick={onNextButtonClick} />
        <div className="player-controls__track">
          <span className="track__name">{selectedTrack.name}</span>
          <span className="track__artist">{selectedTrack.artist}</span>
        </div>
      </div>
    </main>
  );
}

export default App;

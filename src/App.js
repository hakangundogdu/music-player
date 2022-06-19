import { useState } from 'react';

import './App.scss';

const PlayButton = (props) => (
  <button
    aria-label="Play button"
    type="button"
    className="player-controls__btn player-controls__play-btn"
    onClick={props.onClick}
  />
);

const PauseButton = (props) => (
  <button
    aria-label="Pause button"
    type="button"
    className="player-controls__btn player-controls__pause-btn"
    onClick={props.onClick}
  />
);

const NextButton = (props) => (
  <button
    aria-label="Next button"
    type="button"
    className="player-controls__btn player-controls__next-btn"
    onClick={props.onClick}
  />
);

const PreviousButton = (props) => (
  <button
    aria-label="Previous button"
    type="button"
    className="player-controls__btn player-controls__prev-btn"
    onClick={props.onClick}
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

  const [isPaused, setPaused] = useState(true);

  const pauseHandle = () => {
    setPaused(() => !isPaused);
  };

  const onNextButtonClick = () => {
    setSelectedTrack(
      [...tracks].find((track) => track.id === selectedTrack.id + 1) ||
        tracks[0]
    );
  };

  const onPreviousButtonClick = () => {
    setSelectedTrack(
      [...tracks].find((track) => track.id === selectedTrack.id - 1) ||
        tracks[3]
    );
  };

  const renderTracks = () =>
    tracks.map((track) => (
      <div
        className={`tracks-list__item ${
          selectedTrack.id === track.id ? 'tracks-list__item--selected' : ''
        }`}
        key={track.id}
        onClick={() => {
          setSelectedTrack(track);
          setPaused(false);
        }}
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
        <h2 className="tracks-list__title">Tracks </h2>
        {renderTracks()}
      </div>
      <div className="player-controls">
        <PreviousButton onClick={onPreviousButtonClick} />
        {isPaused ? (
          <PlayButton onClick={pauseHandle} />
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

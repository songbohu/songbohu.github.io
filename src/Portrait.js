import React, { useRef, useState } from 'react';
import WorkingPhoto from './media/working-framed.png';
import CyclingPhoto from './media/cycling-bend.jpg';

export default function Portrait() {
  const [showCycling, setShowCycling] = useState(false);
  const pointerType = useRef('');

  return (
    <figure className="portrait">
      <button
        type="button"
        className={`portrait-toggle ${showCycling ? 'is-cycling' : ''}`}
        aria-label="Show cycling photo"
        aria-pressed={showCycling}
        aria-describedby="portrait-hint"
        onPointerEnter={event => {
          if (event.pointerType === 'mouse') setShowCycling(true);
        }}
        onPointerLeave={event => {
          if (event.pointerType === 'mouse') setShowCycling(false);
        }}
        onPointerDown={event => { pointerType.current = event.pointerType; }}
        onClick={event => {
          if (event.detail === 0 || pointerType.current !== 'mouse') {
            setShowCycling(current => !current);
          }
        }}
        onBlur={() => setShowCycling(false)}
      >
        <span className="portrait-caption">
          <span>Usually at my desk. Sometimes</span>
          <span className="caption-ending">
            <span className="caption-working" aria-hidden={showCycling}>…</span>
            <span className="caption-cycling" aria-hidden={!showCycling}>{' on my bike.'}</span>
          </span>
        </span>
        <span className="portrait-switch">
          <img className="portrait-working" src={WorkingPhoto} alt="Songbo Hu at his desk" aria-hidden={showCycling} />
          <img className="portrait-cycling" src={CyclingPhoto} alt="Songbo Hu cycling on a country road" aria-hidden={!showCycling} />
        </span>
      </button>
      <span id="portrait-hint" className="sr-only">Hover to see the cycling photo, or press Enter, Space, or tap to switch photos.</span>
    </figure>
  );
}

import { useEffect, useState } from 'react';

const TABS = ['Trackpad', 'Keyboard', 'Tiles', 'Present', 'Media'];

function Trackpad() {
  return (
    <div className="pd-trackpad">
      <span className="pd-touch" />
      <div className="pd-clicks"><span>Left</span><span>Right</span></div>
    </div>
  );
}

function Keyboard() {
  const rows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];
  return (
    <div className="pd-keyboard">
      <div className="pd-mods">{['Ctrl', 'Alt', '⇧', '⌘', 'Esc'].map((k) => <span key={k}>{k}</span>)}</div>
      {rows.map((r) => (
        <div className="pd-row" key={r}>{[...r].map((k) => <span key={k}>{k}</span>)}</div>
      ))}
      <div className="pd-row"><span className="pd-space">space</span></div>
    </div>
  );
}

function Tiles() {
  const tiles = ['Copy', 'Paste', 'Undo', 'Mute', 'Screenshot', 'Run', 'Find', 'Save', 'Record'];
  return (
    <div className="pd-tiles">
      {tiles.map((t, i) => <span key={t} className={i === 4 ? 'pd-hot' : ''}>{t}</span>)}
    </div>
  );
}

function Present() {
  return (
    <div className="pd-present">
      <div className="pd-timer">12:48</div>
      <div className="pd-next">Next →<small>Slide 7</small></div>
      <div className="pd-prev-row"><span>← Previous</span><span>Hold to point</span></div>
    </div>
  );
}

function Media() {
  return (
    <div className="pd-media">
      <div className="pd-art" />
      <p className="pd-song">Now playing</p>
      <div className="pd-transport"><span>⏮</span><span className="pd-play">⏯</span><span>⏭</span></div>
      <div className="pd-dpad"><span>OK</span></div>
    </div>
  );
}

const SCREENS = [Trackpad, Keyboard, Tiles, Present, Media];

export default function PhoneDemo() {
  const [tab, setTab] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setTab((t) => (t + 1) % TABS.length), 3500);
    return () => clearInterval(id);
  }, [paused]);

  const Screen = SCREENS[tab];
  return (
    <div className="phone-wrap">
      <div className="phone">
        <div className="pd-status"><span className="pd-dot" /> MacBook Pro · Bluetooth</div>
        <div className="pd-screen" key={tab} role="img" aria-label={`Omnipad ${TABS[tab]} screen`}><Screen /></div>
        <div className="pd-tabs" role="tablist">
          {TABS.map((t, i) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === i}
              className={tab === i ? 'active' : ''}
              onClick={() => { setTab(i); setPaused(true); }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import PhoneDemo from './PhoneDemo.jsx';

const RELEASES = 'https://github.com/AryanTy20/omnipad/releases/latest';

const FEATURES = [
  ['Trackpad & air mouse', 'Multi-touch trackpad with tap to click and two-finger scrolling. Or point the phone and the cursor follows the gyroscope.'],
  ['Full keyboard', 'Type with your phone keyboard, use Ctrl, Alt, Shift and ⌘ shortcuts, function keys and a number pad. Dictate with your voice, or send your clipboard.'],
  ['Presentation remote', 'Big Next/Previous buttons, volume-button slide control, black screen, an air pointer and a talk timer that vibrates when time is nearly up.'],
  ['Shortcuts & macros', 'Build boards of tiles for VS Code, Photoshop, OBS, Zoom or any app. Each tile runs key combos, text, delays, clicks and media keys.'],
  ['Media & TV remote', 'Play, pause, skip and change the volume. Use the D-pad, OK, Back and Home on Android TV, Google TV and Fire TV.'],
  ['Scan, jiggle, play', 'Type barcodes and QR codes into any field, keep your computer awake, or play with a Bluetooth gamepad.'],
];

const DEVICES = [
  ['Windows 10 & 11', 'Keyboard, mouse, media, presenter, macros', 'Plus Xbox 360 controller (needs ViGEmBus)'],
  ['macOS', 'Keyboard, mouse, media, presenter, macros', '—'],
  ['Linux', 'Keyboard, mouse, media, presenter, macros', 'Plus now playing with album art and Xbox 360 controller'],
  ['ChromeOS', 'Keyboard, mouse, media, presenter, macros', '—'],
  ['iPad & iPhone', 'Keyboard, plus mouse via AssistiveTouch', '—'],
  ['Android TV, Google TV, Fire TV', 'D-pad remote, keyboard, media, volume', '—'],
];

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    note: 'forever, over Bluetooth',
    items: ['Keyboard with number pad and F-keys', 'Trackpad, media and TV remote', 'Slide clicker: Next, Previous, Start, Blank, End', '1 tile board with up to 6 tiles', 'Small banner on the connect screen only'],
  },
  {
    name: 'Pro for 30 min',
    price: '1 ad',
    note: 'stacks up to 2 hours',
    items: ['Every Pro feature unlocked', 'Live timer shows the time left', 'Never cuts out mid-use: a feature you start keeps working until you disconnect'],
  },
  {
    name: 'Pro',
    price: '3 plans',
    note: 'Monthly, Yearly or Lifetime',
    featured: true,
    items: ['Wi-Fi and USB with the desktop app', 'Gamepad and Xbox 360 controller', 'All tile boards, templates, unlimited tiles', 'Voice typing and type clipboard', 'Air mouse and air pointer', 'Volume-key slides and talk timer', 'Custom Media layout, scan to type, jiggler', 'No ads'],
  },
];

const FAQ = [
  ['Do I need to install software on my computer?', 'No. Over Bluetooth Omnipad is a standard keyboard and mouse, so Windows, macOS, Linux, ChromeOS, iPad and smart TVs use their built-in drivers. The optional desktop app for Linux and Windows adds Wi-Fi and USB, live media info and Xbox controller emulation (Pro).'],
  ['Can I use it as a clicker for PowerPoint or Google Slides?', 'Yes. The Present tab has large Next and Previous buttons, lets the volume buttons change slides, and has start, black-screen and end shortcuts for PowerPoint, Google Slides, Keynote, LibreOffice Impress and PDF viewers, plus a talk timer and an air pointer.'],
  ['Does it work with a smart TV?', 'Yes. Any TV that accepts a Bluetooth keyboard, including Android TV, Google TV and Fire TV, works with the D-pad, OK, Back, Home, media and volume buttons.'],
  ['Which phones and keyboard layouts are supported?', 'Bluetooth mode needs Android 9 or newer. A few phone makers disable the Bluetooth keyboard feature; Wi-Fi or USB with the desktop app (Pro) still works on those phones. Text is sent for a US English layout, so set the target device to US English.'],
  ['Is Omnipad free?', 'Yes. Bluetooth typing, the trackpad, media controls and presenter Next/Previous are free forever with no account. Pro features, including Wi-Fi and USB, the gamepad, extra tile boards and the talk timer, unlock for 30 minutes per short video ad, or with a Monthly, Yearly or Lifetime plan that also removes ads.'],
];

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="Omnipad home">
      <img src="/favicon.svg" width="30" height="30" alt="" />
      Omnipad
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <Logo />
        <nav aria-label="Main">
          <a href="#features">Features</a>
          <a href="#devices">Devices</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="btn btn-primary btn-sm" href="#download">Get the app</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">Free for Android · Bluetooth free · Wi-Fi & USB with Pro</p>
          <h1>Your phone is the only remote you need.</h1>
          <p className="lede">
            Omnipad turns your Android phone into a wireless keyboard, trackpad, slide clicker, macro pad and TV remote. Pair over
            Bluetooth with Windows, Mac, Linux, iPad and smart TVs. Nothing to install on them.
          </p>
          <div className="cta">
            <a className="btn btn-primary" href="#download">Download for Android</a>
            <a className="btn" href="#how">See how it works</a>
          </div>
          <ul className="badges">
            <li>Android 9+</li>
            <li>No account</li>
            <li>Pairs in 2 minutes</li>
          </ul>
        </div>
        <PhoneDemo />
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="section">
      <div className="wrap">
        <h2>One app replaces five gadgets.</h2>
        <p className="sub">A keyboard, a mouse, a presentation clicker, a stream deck and a TV remote, in the phone you already carry.</p>
        <div className="grid">
          {FEATURES.map(([title, text], i) => (
            <article className="card" key={title}>
              <span className="card-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Devices() {
  return (
    <section id="devices" className="section">
      <div className="wrap">
        <h2>Works with what you already own.</h2>
        <p className="sub">Anything that accepts a Bluetooth keyboard and mouse. The optional desktop app for Linux and Windows adds Wi-Fi, USB and extras with Pro.</p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Device</th><th>Bluetooth (no install)</th><th>Desktop app (Wi-Fi / USB)</th></tr>
            </thead>
            <tbody>
              {DEVICES.map(([d, bt, app]) => (
                <tr key={d}><td>{d}</td><td>{bt}</td><td>{app}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function How() {
  const steps = [
    ['Install Omnipad', 'On any Android 9 or newer phone.'],
    ['Choose Bluetooth', 'Allow “Nearby devices” and tap Make phone visible.'],
    ['Pair once', 'Open Bluetooth settings on the computer or TV and pick your phone.'],
    ['Control', 'Next time it reconnects on its own.'],
  ];
  return (
    <section id="how" className="section">
      <div className="wrap">
        <h2>Set up in about two minutes.</h2>
        <ol className="steps">
          {steps.map(([t, d], i) => (
            <li key={t}>
              <span className="step-num">{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="wrap">
        <h2>Free to use. Pro when you want more.</h2>
        <p className="sub">Typing, pointing and presenting over Bluetooth are always free. Unlock everything else with a short ad, a subscription, or once for good.</p>
        <div className="plans">
          {PLANS.map((p) => (
            <article className={`plan ${p.featured ? 'plan-featured' : ''}`} key={p.name}>
              {p.featured && <span className="plan-tag">Best value</span>}
              <h3>{p.name}</h3>
              <p className="plan-price">{p.price}</p>
              <p className="plan-note">{p.note}</p>
              <ul>
                {p.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section">
      <div className="wrap narrow">
        <h2>Questions</h2>
        {FAQ.map(([q, a], i) => (
          <div className={`faq ${open === i ? 'faq-open' : ''}`} key={q}>
            <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              {q}
              <span aria-hidden="true">+</span>
            </button>
            {open === i && <p>{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function Download() {
  return (
    <section id="download" className="section">
      <div className="wrap">
        <div className="download">
          <div>
            <h2>Get Omnipad</h2>
            <p className="sub">Free for Android 9 and newer. The optional desktop app adds Wi-Fi, USB and Xbox controller support with Pro.</p>
            <a className="btn btn-primary" href={RELEASES}>Download from GitHub Releases</a>
          </div>
          <ul className="installers">
            <li><span>Windows 10 & 11</span><code>Omnipad-Setup-&lt;version&gt;.exe</code></li>
            <li><span>Debian, Ubuntu, Mint</span><code>omnipad_&lt;version&gt;_amd64.deb</code></li>
            <li><span>Fedora, openSUSE</span><code>omnipad-&lt;version&gt;-1.x86_64.rpm</code></li>
            <li><span>Arch, CachyOS, Manjaro</span><code>omnipad-&lt;version&gt;-1-x86_64.pkg.tar.zst</code></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Devices />
        <How />
        <Pricing />
        <Faq />
        <Download />
      </main>
      <footer className="wrap footer">
        <Logo />
        <span>Phone as keyboard, mouse, presenter and remote.</span>
        <a href="/privacy" className="footer-push">Privacy</a>
        <a href="/llms.txt">llms.txt</a>
      </footer>
    </>
  );
}

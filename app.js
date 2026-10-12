(() => {
  const REELS = [
    { id: 'cK800UlW99E', cat: 'launch', meta: 'Prevost · UMA EXPO 2023', title: 'All-New H3-45 Launch', desc: 'A coach unveiling on the EXPO floor, captured for the manufacturer’s own channels.' },
    { id: '5e3tfTGPiRA', cat: 'launch', meta: 'Motorcoach Channel · Interview', title: 'The Reveal of the Centennial Edition Prevost H3-45', desc: 'Prevost President François Tremblay, minutes before the reveal.' },
    { id: 'oD4jirk76r8', cat: 'recap', meta: 'United Motorcoach Association', title: '2023 EXPO Recap', desc: 'The Orlando show floor, cut for the association’s official channels.' },
    { id: 'CmErPfQcabM', cat: 'stage', meta: 'CBS Sunday Morning · World of Concrete', title: 'Real “rock stars” at the World of Concrete', desc: 'Convention-floor coverage that aired on national broadcast.' },
    { id: 'cdVoWe6fbEk', cat: 'stage', meta: 'AnitaB.org · Stage conversation', title: 'Amplifying Narratives Through Art with Janelle Monáe', desc: 'Main-stage session coverage for a major technology conference.' },
    { id: 'nJ67ukaIXJM', cat: 'recap', meta: 'Travel South USA', title: '2024 International Showcase Recap', desc: 'International buyers meet Southern destinations, in one recap.' },
    { id: '-A4r3DPaGXU', cat: 'assoc', meta: 'California Bus Association', title: '50 Years of Convention Excellence', desc: 'A milestone convention told through the members who built it.' },
    { id: '0aN32Va8wIY', cat: 'recap', meta: 'Prevost Motorhome EXPO', title: 'Day 2 Update', desc: 'Part of a 60-piece library produced from a single show.' },
    { id: '4Y2bleZkFlk', cat: 'assoc', meta: 'UMA · Washington, D.C.', title: 'UMA 2026 Fly-In', desc: 'Operators on Capitol Hill, filmed for the association’s advocacy push.' },
    { id: 'ZN3cOrpYxeA', cat: 'assoc', meta: 'International Motorcoach Group', title: 'Why IMG?', desc: 'Member stories that recruit the next member.' },
    { id: 'QdwclrjiIVI', cat: 'assoc', meta: 'American Bus Association', title: 'Capitol Hill Media Support', desc: 'On-site media for an industry day in Washington.' },
    { id: 'V1SPL9tDAXU', cat: 'assoc', meta: 'Greater California Livery Association', title: 'We Are GCLA and We Move California', desc: 'An association identity film built from member voices.' }
  ];

  const MCO = [
    { key: 'ops', label: 'Operator stories', title: 'The family business behind the fleet', blurb: 'Brand films, documentaries and commercials for the operators themselves. A wrapped coach becomes a three-part series, an acquisition becomes a story about two families, and a founder gets to tell it in his own words.', items: [
      { id: 'rzz3_WOozhg', meta: 'Campbell Bus Lines · Freedom 39', title: 'Part 1: The Design', desc: 'A Prevost H3-45 wrapped for America’s 250th, eight concepts in.' },
      { id: 'jDJhhjnL0Jw', meta: 'Campbell Bus Lines · Freedom 39', title: 'Part 2: The Driver', desc: 'The driver who saw her first and gave her a name.' },
      { id: 'upIA_kOGDcA', meta: 'Campbell Bus Lines · Freedom 39', title: 'The Song', desc: 'Written and sung by her driver.' },
      { id: 'EGDtnl-kXQM', meta: 'Timi’s Tours & Lifestyle Tours', title: 'The Story We Were Trusted to Tell', desc: 'An acquisition told as two families who already shared a standard.' },
      { id: 'uYb6OBafgcY', meta: 'Charter sales film', title: 'Ask the Age', desc: 'A charter sales piece built for 2026 booking season.' },
      { id: 'BL0Ax9yLUHc', meta: 'Group travel', title: 'One Great Life Moment, Ep. 1', desc: 'A marching band’s trip to the Magic Kingdom.' },
      { id: '5hmAabZO760', meta: 'Stories From The Road', title: 'Gerald’s Story', desc: 'A founder portrait of a family business.' },
      { id: '_Nv2J0PT_O4', meta: 'Northfield Lines · Minneapolis', title: 'Company Overview', desc: 'An operator brand film.' },
      { id: '9zJZqiaFw5c', meta: 'Polynesian Adventure · Hawaii', title: 'Commercial', desc: 'A tour operator spot shot in the islands.' },
      { id: 'mEMQdEz6vnQ', meta: 'Campbell Bus Lines · Vertical', title: 'Raising the Bar Together', desc: 'Maintenance proof from the shop floor.' },
      { id: 'kPwB0qd46i0', meta: 'Rural transit · Documentary', title: 'DCUTS: A Rural Transportation Success Story', desc: 'Long-form on public transportation that works.' }
    ]},
    { key: 'bids', label: 'RFPs & credentials', title: 'Video that helps you win the work', blurb: 'A written proposal says you’re capable. A film shows the maintenance bay, the training program and the people. Our bid films go in as part of the application, and our credential films make an audit something a charter buyer can actually see.', items: [
      { id: 'lD1xFcVxk7I', meta: 'Cardinal Transportation · 2024', title: 'Transforming Ohio’s Intercity Travel with GoBus', desc: 'Produced for Cardinal’s bid on Ohio’s GoBus rural intercity service.' },
      { id: 'tyD9FbSCH5E', meta: 'Cardinal Transportation · IMG', title: 'Why IMG Membership Matters', desc: 'One of 54 IMG operators, explaining what the audits and training buy the passenger.' }
    ]},
    { key: 'oem', label: 'Builders & dealers', title: 'The manufacturer’s side of the sale', blurb: 'Customer spotlights, launches, aftermarket films and dealer stories for Prevost, MCI, TEMSA and ABC Companies, finished in English and French when the market calls for it. We also work as the American crew for OEM marketing teams based elsewhere.', items: [
      { id: 'YWocwAIW5KQ', meta: 'Prevost × Greyhound', title: 'Customer Spotlight: Greyhound', desc: 'The 360-coach contract, the largest in Prevost’s history at the time.' },
      { id: 'YRm6OVnFONE', meta: 'Prevost', title: 'Customer Spotlight: Hampton Jitney', desc: 'An operator on why the coach fits the job.' },
      { id: 'cK800UlW99E', meta: 'Prevost · UMA 2023', title: 'All-New H3-45 Launch', desc: 'Floor assets captured for Prevost’s agency in Québec to finish.' },
      { id: 'OfumBLxL-Bk', meta: 'Prevost · Aftermarket', title: 'EFD Retrofit', desc: 'Service and parts content that keeps an existing fleet current.' },
      { id: 'wPbiJINzDM4', meta: 'Prevost · French edition', title: 'Le coin du client: Karst Stage', desc: 'The spotlight series, finished for a bilingual market.' },
      { id: '13dav80h3-Q', meta: 'Prevost', title: 'Customer Spotlight: Some of Our Customers', desc: 'The series compilation.' },
      { id: 'w3mPqVyBYlU', meta: 'ABC Companies × JET Limousines AZ', title: 'Family Ties', desc: 'A luxury fleet launched for the big game, and the dealer behind it.' },
      { id: '5CD5oqXDfcY', meta: 'ABC Companies × VDL', title: 'Coachside Connect', desc: 'A dealer and builder session for fleet buyers.' },
      { id: 'ktyNHZQP2nU', meta: 'Prevost Motorhome Expo', title: 'Millennium Coach Tour', desc: 'Part of a 60-piece library from one show.' },
      { id: '2XHsJf2q_aY', meta: 'Prevost Motorhome Expo', title: 'Featherlite Build Walkthrough', desc: 'Converter coverage for Prevost-Stuff.com.' },
      { id: 'zQesEaJCd0A', meta: 'Prevost Motorhome Expo', title: 'Liberty Coach Interior', desc: 'Detail work that sells a seven-figure coach.' },
      { id: '2orpbgm1hMY', meta: 'Prevost Motorhome Expo', title: 'Owner Test Drives', desc: 'First reactions from behind the wheel.' }
    ]},
    { key: 'safety', label: 'Safety video', title: 'The safety briefing every passenger sees, in your name', blurb: 'Pre-departure safety videos that play on the coach monitors before the wheels turn: exits, belts, restrooms and emergency equipment, delivered the same way on every trip. We made the industry edition for MCI and a custom edition for Campbell Bus Lines.', items: [
      { id: '1YWiFlbMizw', meta: 'Motor Coach Industries · OEM edition', title: 'Passenger Safety: Travel with Confidence', desc: 'The industry-wide pre-departure briefing.' },
      { id: '36Mr5j2ohC8', meta: 'Campbell Bus Lines · Operator edition', title: 'Custom Pre-Departure Safety Video', desc: 'Their coaches, interiors and branding, plus New York seat-belt rules.' }
    ]},
    { key: 'hire', label: 'Driver recruiting', title: 'The job posting won’t fill the seat. The drivers will.', blurb: 'Every operator is short drivers and running the same ad. We put drivers on camera to describe the pay, the schedule and the places they get sent, cut for paid social, careers pages and hiring events.', items: [
      { id: 't5VQWSbDf0A', meta: 'Timi’s Tours · Recruiting', title: 'Get Paid to See the Country. For Real.', desc: 'A driver pitch built to run as paid social.' },
      { id: 'xCaUaAdHcYs', meta: 'Travel Kuz · Recruiting', title: '“It’s a Paid Vacation.”', desc: 'Drivers on why the job is worth having.' }
    ]},
    { key: 'legacy', label: 'Anniversaries', title: 'A hundred years is a story, not a press release', blurb: 'Milestone films built from archive material and the people who lived it, for some of the oldest family businesses and associations in American transportation.', items: [
      { id: '-IvuYI4ipIs', meta: 'Virginia Motorcoach Association', title: '100th Anniversary Film', desc: 'A century of Virginia motorcoach history.' },
      { id: 'L7nFfGWNlMg', meta: 'Vandalia Bus Lines', title: '90 Years, Four Generations', desc: 'A multigenerational family business.' },
      { id: '-A4r3DPaGXU', meta: 'California Bus Association', title: '50 Years of Convention Excellence', desc: 'The members who built it.' }
    ]},
    { key: 'teams', label: 'Teams & events', title: 'The team arrives on a coach. That’s the shot nobody takes.', blurb: 'Matchday and event films that put the operator inside the story: the crowd, the game and the coach that delivered one of the sides. Built for athletic departments, leagues and event planners.', items: [
      { id: 'CwhxcEpY3V0', meta: 'TCS · BMO Stadium, Los Angeles', title: 'We Shot the Derby. And the Bus That Delivered One Side.', desc: 'The Clásico Tapatío, intercut with TCS rolling a team in.' }
    ]},
    { key: 'ai', label: 'AI social', title: 'Spots without pulling a coach off a charter', blurb: 'Generated verticals for products, comfort and coaches that haven’t been delivered yet. For everything real, the camera work and the final cut stay human.', items: [
      { id: 'SBocp4-Uyr8', meta: 'Campbell Bus Lines · AI vertical', title: 'Prevost Cloud One Seating: “Float in Comfort”', desc: 'A seating upgrade sold as a feeling.' },
      { id: 'vmDPYcFTt3I', meta: 'Campbell Bus Lines · AI vertical', title: 'Charter Comfort', desc: 'Published straight to social, no shoot day.' }
    ]},
    { key: 'hill', label: 'Washington', title: 'Telling this industry’s story to Congress since the shutdown', blurb: 'In 2020 and 2021 we built the video campaign that put shuttered operators in front of lawmakers during the CERTS relief fight. We’re still on the Hill with them.', items: [
      { id: '5je2DBLXOKg', meta: 'Relief campaign · 2020', title: 'The Motorcoach Industry Requires Financial Relief Now, Congress', desc: 'The industry, nearly invisible in Washington, makes its case.' },
      { id: 'CTMSMSBXjuU', meta: 'Reconciliation push · 2021', title: 'Congress, Please Add $6B for CERTS Grants', desc: 'Operators ask for the next round.' },
      { id: 'BzoeuKViULM', meta: 'Congressional briefing', title: 'CERTS: A Boston Operator’s Story', desc: 'Told for the Hill.' },
      { id: '4Y2bleZkFlk', meta: 'UMA · April 2026', title: 'Legislative Fly-In', desc: 'Small-business operators on Capitol Hill.' },
      { id: 'QdwclrjiIVI', meta: 'American Bus Association', title: 'Capitol Hill Media Support', desc: 'An industry day in Washington.' }
    ]}
  ];
  const STRIP = ['FN5UjE_JhXE','cK800UlW99E','oD4jirk76r8','CmErPfQcabM','nJ67ukaIXJM','-A4r3DPaGXU','5e3tfTGPiRA','4Y2bleZkFlk','cdVoWe6fbEk','0aN32Va8wIY','ZN3cOrpYxeA','8JeopeGwL_Q','V1SPL9tDAXU','y8oGGyuum9A','Fe5kHqlE0ek','-IvuYI4ipIs'];

  const thumb = id => `./assets/thumbs/${id}.webp`;
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // Film strip (duplicated for seamless loop)
  const strip = document.getElementById('strip');
  if (strip) {
    const imgs = STRIP.map(id => `<img src="${thumb(id)}" alt="" width="220" height="124" loading="lazy" decoding="async">`).join('');
    strip.innerHTML = imgs + imgs;
  }

  // Reel grid
  const reels = document.getElementById('reels');
  if (reels) {
    reels.innerHTML = REELS.map(r => `
      <article class="reel" data-cat="${r.cat}">
        <button class="yt" data-id="${r.id}" data-title="${esc(r.title)}" aria-label="Play: ${esc(r.title)}">
          <img src="${thumb(r.id)}" alt="" width="960" height="540" loading="lazy" decoding="async">
          <span class="yt__play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg></span>
        </button>
        <div>
          <p class="reel__meta">${esc(r.meta)}</p>
          <h3 class="reel__title">${esc(r.title)}</h3>
          <p class="reel__desc">${esc(r.desc)}</p>
        </div>
      </article>`).join('');
  }


  // Motorcoach tabs
  const mcoTabs = document.getElementById('mco-tabs');
  const mcoPanel = document.getElementById('mco-panel');
  if (mcoTabs && mcoPanel) {
    const card = r => `
      <article class="reel">
        <button class="yt" data-id="${r.id}" data-title="${esc(r.title)}" aria-label="Play: ${esc(r.title)}">
          <img src="${thumb(r.id)}" alt="" width="960" height="540" loading="lazy" decoding="async">
          <span class="yt__play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg></span>
        </button>
        <div>
          <p class="reel__meta">${esc(r.meta)}</p>
          <h4 class="reel__title">${esc(r.title)}</h4>
          <p class="reel__desc">${esc(r.desc)}</p>
        </div>
      </article>`;
    const show = key => {
      const g = MCO.find(x => x.key === key);
      mcoTabs.querySelectorAll('.chip').forEach(c => { const on = c.dataset.key === key; c.classList.toggle('is-active', on); c.setAttribute('aria-pressed', on); });
      mcoPanel.innerHTML = `
        <div class="mco__intro">
          <h3 class="mco__t">${esc(g.title)}</h3>
          <p>${esc(g.blurb)}</p>
          <p class="mco__count">${g.items.length} film${g.items.length > 1 ? 's' : ''}</p>
        </div>
        <div class="reels mco__grid">${g.items.map(card).join('')}</div>`;
    };
    mcoTabs.innerHTML = MCO.map(g => `<button class="chip" data-key="${g.key}" aria-pressed="false">${esc(g.label)} <span class="chip__n">${g.items.length}</span></button>`).join('');
    mcoTabs.addEventListener('click', e => { const c = e.target.closest('.chip'); if (c) show(c.dataset.key); });
    show(MCO[0].key);
  }

  // Click-to-load YouTube
  document.addEventListener('click', e => {
    const b = e.target.closest('.yt');
    if (!b || b.querySelector('iframe')) return;
    const f = document.createElement('iframe');
    f.src = `https://www.youtube-nocookie.com/embed/${b.dataset.id}?autoplay=1&rel=0&modestbranding=1`;
    f.title = b.dataset.title || 'Video';
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.allowFullscreen = true;
    b.appendChild(f);
    b.querySelector('.yt__play')?.remove();
  });

  // Filters
  const chips = document.querySelectorAll('.work .chip');
  chips.forEach(c => c.addEventListener('click', () => {
    chips.forEach(x => { x.classList.toggle('is-active', x === c); x.setAttribute('aria-pressed', x === c); });
    const f = c.dataset.filter;
    document.querySelectorAll('.reel').forEach(r => { r.hidden = !(f === 'all' || r.dataset.cat === f); });
  }));

  // Package tabs
  const tabs = [...document.querySelectorAll('.tab')];
  const select = t => tabs.forEach(x => {
    const on = x === t;
    x.classList.toggle('is-active', on);
    x.setAttribute('aria-selected', on);
    x.tabIndex = on ? 0 : -1;
    document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
  });
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', e => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
      select(n); n.focus();
    });
  });

  // Header
  const header = document.querySelector('.header');
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 40);
    header.classList.toggle('is-hidden', y > 400 && y > lastY && !navList.classList.contains('is-open'));
    lastY = y;
  };
  const navList = document.getElementById('nav-list');
  const toggle = document.querySelector('.nav__toggle');
  toggle.addEventListener('click', () => {
    const open = !navList.classList.contains('is-open');
    navList.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    header.classList.add('is-scrolled');
  });
  navList.addEventListener('click', e => {
    if (e.target.closest('a')) { navList.classList.remove('is-open'); toggle.setAttribute('aria-expanded', false); }
  });
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -8% 0px' }) : null;
  document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('is-in'));

  // Inquiry form -> prefilled email
  const form = document.getElementById('inquiry');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    let ok = true;
    const setErr = (name, msg) => {
      const f = form.querySelector(`[name="${name}"]`).closest('.field');
      f.classList.toggle('has-error', !!msg);
      document.getElementById(`e-${name}`).textContent = msg || '';
      if (msg) ok = false;
    };
    setErr('name', d.name.trim() ? '' : 'Please add your name.');
    setErr('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim()) ? '' : 'Please add a valid email.');
    if (!ok) { status.textContent = ''; status.classList.remove('is-ok'); form.querySelector('.has-error input').focus(); return; }
    const subject = `Project inquiry: ${d.event || d.package}${d.company ? ' — ' + d.company : ''}`;
    const body = [
      `Name: ${d.name}`, `Company: ${d.company}`, `Email: ${d.email}`, `Phone: ${d.phone}`,
      `Show or event: ${d.event}`, `Dates: ${d.dates}`, `Interested in: ${d.package}`, '', d.message
    ].join('\n');
    window.location.href = `mailto:ryan@tradereel.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = 'Thanks. Your email app should open with the details filled in. Prefer to call? +1 706 372 3293.';
    status.classList.add('is-ok');
  });
})();

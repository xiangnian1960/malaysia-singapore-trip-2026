(() => {
  const DATA = window.TRIP_DATA;
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];
  const mapUrl = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
  const esc = (s='') => String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

  const allItems = DATA.days.flatMap(day => day.items.map(item => ({...item, day})));
  const timedItems = allItems.filter(i => i.startISO).sort((a,b) => new Date(a.startISO) - new Date(b.startISO));

  function scopeLabel(scope) {
    return scope === 'parents' ? '👨‍👩 爸妈' : scope === 'self' ? '👤 我' : '👨‍👩‍👧 三人';
  }

  function localTripDateParts(date = new Date()) {
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: DATA.primaryTimezone, year:'numeric', month:'2-digit', day:'2-digit'
    }).formatToParts(date).reduce((a,p) => (a[p.type]=p.value,a),{});
    return `${parts.year}-${parts.month}-${parts.day}`;
  }

  function tripDateLabel(dateStr) {
    const [y,m,d] = dateStr.split('-').map(Number);
    const wd = ['日','一','二','三','四','五','六'][new Date(Date.UTC(y,m-1,d)).getUTCDay()];
    return `${m}/${d}（周${wd}）`;
  }

  function makeActions(item) {
    const actions = [];
    if (item.mapQuery) actions.push(`<a class="action-link primary" target="_blank" rel="noopener" href="${mapUrl(item.mapQuery)}">📍 Google Maps</a>`);
    if (item.places?.length > 1) actions.push(`<button class="action-link js-toggle-places" type="button">展开地点导航</button>`);
    return actions.join('');
  }

  function itemHtml(item) {
    const scopeClass = item.scope === 'parents' ? 'scope-parents' : item.scope === 'self' ? 'scope-self' : '';
    const placeLinks = item.places?.length ? `<div class="item-actions place-links" hidden>${item.places.map(p => `<a class="action-link" target="_blank" rel="noopener" href="${mapUrl(p)}">📍 ${esc(p)}</a>`).join('')}</div>` : '';
    const actual = item.actualDepartureTime ? `<div class="item-note">🚆 <strong>实际发车：${esc(item.actualDepartureTime)}</strong>${item.endISO ? ' · 预计约 17:30 抵达 Butterworth' : ''}</div>` : '';
    return `<article class="timeline-item" data-scope="${esc(item.scope)}">
      <span class="timeline-dot"></span>
      <div class="item-time">${esc(item.time)}</div>
      <div class="item-title">${esc(item.title)}</div>
      <div class="item-row">${item.transport ? `🚶‍♀️/🚆/✈️ ${esc(item.transport)}　` : ''}${item.location ? `📍 ${esc(item.location)}` : ''}</div>
      ${actual}
      ${item.note ? `<div class="item-note">${esc(item.note)}</div>` : ''}
      <div class="item-tags"><span class="tag ${scopeClass}">${scopeLabel(item.scope)}</span>${item.person ? `<span class="tag">${esc(item.person)}</span>` : ''}</div>
      <div class="item-actions">${makeActions(item)}</div>
      ${placeLinks}
    </article>`;
  }

  function dayCardHtml(day, open=false) {
    return `<section class="day-card paper-card" data-date="${day.date}">
      <div class="day-card__header">
        <div><div class="eyebrow">DAY ${day.dayNo}</div><h3>${tripDateLabel(day.date)} · ${esc(day.label)}</h3></div>
        <div class="day-card__meta">${esc(day.city)}</div>
      </div>
      <details ${open ? 'open' : ''}>
        <summary>${open ? '收起' : '展开'}当天行程</summary>
        <div class="timeline">${day.items.map(itemHtml).join('')}</div>
      </details>
    </section>`;
  }

  function renderDays() {
    $('#allDaysContent').innerHTML = DATA.days.map(d => dayCardHtml(d, false)).join('');
    const todayStr = localTripDateParts();
    const today = DATA.days.find(d => d.date === todayStr);
    if (today) {
      $('#todayLabel').textContent = `${tripDateLabel(today.date)} · ${today.label}`;
      $('#todayContent').innerHTML = dayCardHtml(today, true);
    } else {
      const tripStart = DATA.days[0].date, tripEnd = DATA.days[DATA.days.length-1].date;
      $('#todayLabel').textContent = todayStr < tripStart ? '旅行还没开始，下面显示第一天安排。' : todayStr > tripEnd ? '本次旅行已经结束，欢迎回看完整行程。' : '今天没有单独安排。';
      const fallback = todayStr < tripStart ? DATA.days[0] : DATA.days[DATA.days.length-1];
      $('#todayContent').innerHTML = dayCardHtml(fallback, true);
    }
  }

  function getNext(now = new Date()) {
    return timedItems.find(i => new Date(i.startISO) > now) || null;
  }

  function formatCountdown(ms) {
    if (ms <= 0) return '马上开始';
    const total = Math.floor(ms/1000);
    const days = Math.floor(total/86400);
    const hours = Math.floor((total%86400)/3600);
    const mins = Math.floor((total%3600)/60);
    const secs = total%60;
    return `${days ? `${days}天 ` : ''}${String(hours).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
  }

  function updateNext() {
    const now = new Date();
    const next = getNext(now);
    if (!next) {
      $('#nextTitle').textContent = '旅程已完成 🎉';
      $('#nextMeta').textContent = '这次和爸妈一起的旅行，辛苦啦。';
      $('#countdown').textContent = 'WELCOME HOME';
      $('#nextActions').innerHTML = '';
      return;
    }
    const start = new Date(next.startISO);
    $('#nextTitle').textContent = next.title;
    const actual = next.actualDepartureTime ? ` · 实际发车 ${next.actualDepartureTime}` : '';
    $('#nextMeta').textContent = `${tripDateLabel(next.day.date)} · ${next.time} · ${scopeLabel(next.scope)}${actual}`;
    $('#countdown').textContent = formatCountdown(start - now);
    $('#nextActions').innerHTML = next.mapQuery ? `<a class="action-link primary" target="_blank" rel="noopener" href="${mapUrl(next.mapQuery)}">📍 打开导航</a>` : '';
  }

  function initTheme() {
    const stored = localStorage.getItem('trip-theme');
    if (stored) document.documentElement.dataset.theme = stored;
    else {
      const hour = Number(new Intl.DateTimeFormat('en-GB',{timeZone:DATA.primaryTimezone,hour:'2-digit',hourCycle:'h23'}).format(new Date()));
      document.documentElement.dataset.theme = (hour >= 18 || hour < 6) ? 'dark' : 'light';
    }
    syncThemeButton();
    $('#themeToggle').addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      localStorage.setItem('trip-theme', next);
      syncThemeButton();
    });
  }
  function syncThemeButton() { $('#themeToggle').textContent = document.documentElement.dataset.theme === 'dark' ? '☀️' : '🌙'; }

  function renderChecklist() {
    const saved = JSON.parse(localStorage.getItem('trip-checklist') || '{}');
    $('#checklistContent').innerHTML = DATA.checklist.map((g,gi) => `<section class="checklist-card paper-card"><h3>${esc(g.group)}</h3>${g.items.map((item,ii) => {
      const id = `check-${gi}-${ii}`;
      return `<div class="check-item"><input id="${id}" data-key="${id}" type="checkbox" ${saved[id] ? 'checked' : ''}><label for="${id}">${esc(item)}</label></div>`;
    }).join('')}</section>`).join('');
    $$('#checklistContent input[type="checkbox"]').forEach(el => el.addEventListener('change', () => {
      const state = JSON.parse(localStorage.getItem('trip-checklist') || '{}');
      state[el.dataset.key] = el.checked;
      localStorage.setItem('trip-checklist', JSON.stringify(state));
    }));
    $('#resetChecklist').addEventListener('click', () => {
      if (confirm('确定要清除这台设备上的全部勾选状态吗？')) {
        localStorage.removeItem('trip-checklist');
        renderChecklist();
      }
    }, {once:true});
  }

  function bindInteractions() {
    document.addEventListener('click', e => {
      const btn = e.target.closest('.js-toggle-places');
      if (!btn) return;
      const wrap = btn.closest('.timeline-item').querySelector('.place-links');
      wrap.hidden = !wrap.hidden;
      btn.textContent = wrap.hidden ? '展开地点导航' : '收起地点导航';
    });
    document.addEventListener('toggle', e => {
      if (e.target.tagName === 'DETAILS') {
        const s = e.target.querySelector('summary');
        if (s) s.textContent = e.target.open ? '收起当天行程' : '展开当天行程';
      }
    }, true);
  }

  function init() {
    initTheme();
    renderDays();
    renderChecklist();
    bindInteractions();
    $('#lastUpdated').textContent = DATA.lastUpdated;
    updateNext();
    setInterval(updateNext, 1000);
  }

  init();
})();

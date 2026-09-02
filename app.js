// =====================================================
// 声の選択 (Web Speech API)
// インド英語 = lang "en-IN" の声(Edgeにある)。通常英語 = en-US → en-GB の順で探す
// =====================================================
let englishVoices = [];

function normLang(v) {
  return (v.lang || "").replace("_", "-").toLowerCase();
}

function loadVoices() {
  if (!window.speechSynthesis) return;
  const all = speechSynthesis.getVoices();
  englishVoices = all.filter(v => normLang(v).startsWith("en"));
  buildVoiceSelect();
  updateVoiceNote();
}

// 女性の声を優先する。Edge/Windows の英語の声のうち女性の名前
const FEMALE_NAMES = /aria|jenny|zira|ana\b|michelle|emma|ava|sonia|libby|maisie|hazel|susan|neerja|heera|natasha|clara|molly|samantha|karen|moira|tessa|fiona|female/i;

function preferFemale(list) {
  return list.find(v => FEMALE_NAMES.test(v.name)) || list[0] || null;
}

function findIndiaVoice() {
  return preferFemale(englishVoices.filter(v => normLang(v) === "en-in"));
}

function findStandardVoice() {
  return preferFemale(englishVoices.filter(v => normLang(v) === "en-us"))
      || preferFemale(englishVoices.filter(v => normLang(v) === "en-gb"))
      || preferFemale(englishVoices);
}

// state.voice の値から実際の声を決める
function pickVoice() {
  if (state.voice === "india") return findIndiaVoice() || findStandardVoice();
  if (state.voice === "standard") return findStandardVoice();
  return englishVoices.find(v => v.voiceURI === state.voice) || findStandardVoice();
}

function buildVoiceSelect() {
  const sel = document.getElementById("voice-select");
  const keep = state.voice;
  // 自動2つの後ろに、見つかった英語の声を並べる
  const autoOptions = Array.from(sel.options).slice(0, 2);
  sel.innerHTML = "";
  autoOptions.forEach(o => sel.appendChild(o));
  englishVoices.forEach(v => {
    const o = document.createElement("option");
    o.value = v.voiceURI;
    o.textContent = `${v.name} (${v.lang})`;
    sel.appendChild(o);
  });
  const exists = Array.from(sel.options).some(o => o.value === keep);
  sel.value = exists ? keep : "india";
  if (!exists) state.voice = "india";
}

function updateVoiceNote() {
  const note = document.getElementById("voice-note");
  if (!window.speechSynthesis) {
    note.textContent = "このブラウザは読み上げに対応していません。Edge か Chrome で開いてください。";
    return;
  }
  if (englishVoices.length === 0) {
    note.textContent = "英語の声を読み込み中…";
    return;
  }
  const v = pickVoice();
  const india = findIndiaVoice();
  if (state.voice === "india" && !india) {
    note.textContent = `いまの声: ${v ? v.name : "?"}。このブラウザにはインド英語(en-IN)の声がありません。Edge で開くと English (India) の声が使えます。`;
    return;
  }
  note.textContent = `いまの声: ${v ? `${v.name} (${v.lang})` : "?"}`;
}

if (window.speechSynthesis) {
  speechSynthesis.onvoiceschanged = loadVoices;
}

// =====================================================
// 音声読み上げ
// =====================================================
function speak(text, btn, rate) {
  if (!window.speechSynthesis) {
    alert("このブラウザは音声読み上げ（Web Speech API）に対応していません。\nEdge または Chrome をお試しください。");
    return;
  }
  speechSynthesis.cancel();
  document.querySelectorAll(".speak-btn").forEach(b => b.classList.remove("speaking"));

  const utter = new SpeechSynthesisUtterance(text);
  const v = pickVoice();
  if (v) {
    utter.voice = v;
    utter.lang = v.lang;
  } else {
    utter.lang = "en-US";
  }
  utter.rate = rate || state.rate || 0.85;

  if (btn) {
    btn.classList.add("speaking");
    utter.onend  = () => btn.classList.remove("speaking");
    utter.onerror = () => btn.classList.remove("speaking");
  }
  speechSynthesis.speak(utter);
}

function speakFull() {
  if (currentList.length === 0) return;
  const btn = revealed ? document.getElementById("speak-full") : document.getElementById("btn-listen");
  speak(currentList[currentIndex].english, btn, state.rate);
}

function speakSlow() {
  if (currentList.length === 0) return;
  speak(currentList[currentIndex].english, document.getElementById("btn-listen-slow"), 0.6);
}

function speakWord(index) {
  if (currentList.length === 0) return;
  const v = currentList[currentIndex].vocabulary[index];
  const word = typeof v === "string" ? v : v.term;
  speak(word, document.getElementById(`vocab-speak-${index}`), 0.75);
}

// バッジの色
const contextColors = {
  "空港・移動": "#e3f2fd",
  "オフィス": "#e8f5e9",
  "打ち合わせ": "#f3e8fd",
  "食事": "#fff3e0",
  "別れ・お礼": "#fce4ec",
  "インド英語": "#fff8e1"
};
const contextTextColors = {
  "空港・移動": "#1565c0",
  "オフィス": "#2e7d32",
  "打ち合わせ": "#7b1fa2",
  "食事": "#e65100",
  "別れ・お礼": "#880e4f",
  "インド英語": "#f57f17"
};
const ROLE_LABELS = { listen: "👂 相手が言う", say: "🗣 自分が言う" };

// =====================================================
// 学習状態の管理 (localStorage)
// =====================================================
const STORAGE_KEY = "english_india_app_state_v1";
const MODES = ["study", "all", "new", "review", "ok"];
const STATUS_LABELS = { new: "新規", review: "復習", ok: "OK" };
const SCENES = ["all", "空港・移動", "オフィス", "打ち合わせ", "食事", "別れ・お礼"];
const ROLES = ["all", "listen", "say"];
const RATES = ["0.7", "0.85", "1.0"];

function defaultState() {
  const statuses = {};
  messages.forEach(m => { statuses[m.id] = "new"; });
  return {
    statuses,
    mode: "study",
    scene: "all",
    role: "all",
    voice: "india",
    rate: 0.85,
    autoplay: true,
    lastIds: { study: null, all: null, new: null, review: null, ok: null },
    updatedAt: 0
  };
}

function loadState() {
  const def = defaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return def;
    const loaded = JSON.parse(raw);

    const statuses = loaded.statuses || {};
    messages.forEach(m => {
      if (!(m.id in statuses)) statuses[m.id] = "new";
    });

    return {
      statuses,
      mode: MODES.includes(loaded.mode) ? loaded.mode : def.mode,
      scene: SCENES.includes(loaded.scene) ? loaded.scene : def.scene,
      role: ROLES.includes(loaded.role) ? loaded.role : def.role,
      voice: typeof loaded.voice === "string" ? loaded.voice : def.voice,
      rate: RATES.includes(String(loaded.rate)) ? Number(loaded.rate) : def.rate,
      autoplay: typeof loaded.autoplay === "boolean" ? loaded.autoplay : def.autoplay,
      lastIds: Object.assign({}, def.lastIds, loaded.lastIds || {}),
      updatedAt: typeof loaded.updatedAt === "number" ? loaded.updatedAt : 0
    };
  } catch (e) {
    return def;
  }
}

function saveState() {
  state.updatedAt = Date.now();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getStatus(id) {
  return state.statuses[id] || "new";
}

// =====================================================
// 表示モードごとのリスト構築
// =====================================================
function getFilteredMessages() {
  return messages.filter(m =>
    (state.scene === "all" || m.scene === state.scene) &&
    (state.role === "all" || m.role === state.role)
  );
}

// 通常学習: 新規を優先しつつ、復習を10件に1件程度混ぜる。OKは表示しない。
function buildStudyQueue() {
  const pool = getFilteredMessages();
  const newCards = pool.filter(m => getStatus(m.id) === "new");
  const reviewCards = pool.filter(m => getStatus(m.id) === "review");

  if (newCards.length === 0 && reviewCards.length === 0) return [];
  if (newCards.length === 0) return reviewCards.slice();

  const queue = [];
  let reviewPtr = 0;
  newCards.forEach((card, i) => {
    queue.push(card);
    if ((i + 1) % 10 === 0 && reviewCards.length > 0) {
      queue.push(reviewCards[reviewPtr % reviewCards.length]);
      reviewPtr++;
    }
  });
  if (reviewCards.length > 0 && reviewPtr === 0) {
    queue.push(...reviewCards);
  }
  return queue;
}

function buildList(mode) {
  const pool = getFilteredMessages();
  switch (mode) {
    case "all":    return pool.slice();
    case "new":    return pool.filter(m => getStatus(m.id) === "new");
    case "review": return pool.filter(m => getStatus(m.id) === "review");
    case "ok":     return pool.filter(m => getStatus(m.id) === "ok");
    case "study":
    default:       return buildStudyQueue();
  }
}

function rebuildList(preserveId) {
  currentList = buildList(state.mode);
  if (currentList.length === 0) {
    currentIndex = 0;
    return;
  }
  let idx = 0;
  if (preserveId != null) {
    const found = currentList.findIndex(m => m.id === preserveId);
    if (found >= 0) idx = found;
  }
  currentIndex = Math.min(idx, currentList.length - 1);
}

function persistPosition() {
  state.lastIds[state.mode] = currentList.length > 0 ? currentList[currentIndex].id : null;
  saveState();
}

// =====================================================
// モード切り替え・状態変更
// =====================================================
function afterFilterChange() {
  rebuildList(state.lastIds[state.mode]);
  saveState();
  updateStats();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function onModeChange(newMode) {
  persistPosition();
  state.mode = newMode;
  afterFilterChange();
}

function onSceneChange(newScene) {
  persistPosition();
  state.scene = SCENES.includes(newScene) ? newScene : "all";
  afterFilterChange();
}

function onRoleChange(newRole) {
  persistPosition();
  state.role = ROLES.includes(newRole) ? newRole : "all";
  afterFilterChange();
}

function onVoiceChange(value) {
  state.voice = value;
  saveState();
  updateVoiceNote();
}

function onRateChange(value) {
  state.rate = Number(value);
  saveState();
}

function onAutoplayChange(checked) {
  state.autoplay = checked;
  saveState();
}

function setCardStatus(newStatus) {
  if (currentList.length === 0) return;
  const card = currentList[currentIndex];
  state.statuses[card.id] = newStatus;

  currentList = buildList(state.mode);
  if (currentList.length === 0) {
    currentIndex = 0;
  } else {
    currentIndex = Math.min(currentIndex, currentList.length - 1);
  }

  persistPosition();
  updateStats();
  render({ autoplay: true });
}

// =====================================================
// 学習データのエクスポート / インポート
// =====================================================
function exportState() {
  const data = {
    exportedAt: new Date().toISOString(),
    statuses: state.statuses,
    mode: state.mode,
    scene: state.scene,
    role: state.role,
    lastIds: state.lastIds
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "india-learning-state.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function triggerImport() {
  document.getElementById("import-file-input").click();
}

function handleImportFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = e => {
    let data;
    try {
      data = JSON.parse(e.target.result);
    } catch (err) {
      alert("⚠️ ファイルの形式が正しくありません（JSONとして読み込めませんでした）。");
      event.target.value = "";
      return;
    }
    if (!data || typeof data !== "object" || typeof data.statuses !== "object" || data.statuses === null) {
      alert("⚠️ 学習データの内容が正しくありません。このアプリから書き出したファイルを選んでください。");
      event.target.value = "";
      return;
    }
    const ok = confirm(
      "この端末の学習状態（新規/復習/OK、最後に見ていた位置）を、\n" +
      "読み込んだファイルの内容で上書きします。\n\nこの操作は取り消せません。よろしいですか？"
    );
    if (!ok) {
      event.target.value = "";
      return;
    }

    const newStatuses = {};
    messages.forEach(m => {
      const s = data.statuses[m.id];
      newStatuses[m.id] = (s === "new" || s === "review" || s === "ok") ? s : "new";
    });
    state.statuses = newStatuses;
    state.mode = MODES.includes(data.mode) ? data.mode : state.mode;
    state.scene = SCENES.includes(data.scene) ? data.scene : state.scene;
    state.role = ROLES.includes(data.role) ? data.role : state.role;
    state.lastIds = Object.assign(
      { study: null, all: null, new: null, review: null, ok: null },
      data.lastIds || {}
    );

    saveState();
    rebuildList(state.lastIds[state.mode]);
    syncControls();
    updateStats();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    alert("✅ 学習データを読み込みました。");
    event.target.value = "";
  };
  reader.onerror = () => {
    alert("⚠️ ファイルの読み込みに失敗しました。もう一度お試しください。");
    event.target.value = "";
  };
  reader.readAsText(file);
}

// =====================================================
// セクションの折りたたみ
// =====================================================
const COLLAPSIBLE_SECTIONS = ["explanation", "vocab", "tip"];

function toggleSection(name) {
  const section = document.getElementById(`section-${name}`);
  const expanded = section.classList.toggle("expanded");
  section.querySelector(".collapsible-header").setAttribute("aria-expanded", expanded ? "true" : "false");
}

function collapseAllSections() {
  const expandVocabByDefault = window.innerWidth > 768;
  COLLAPSIBLE_SECTIONS.forEach(name => {
    const section = document.getElementById(`section-${name}`);
    const expanded = expandVocabByDefault && name === "vocab";
    section.classList.toggle("expanded", expanded);
    section.querySelector(".collapsible-header").setAttribute("aria-expanded", expanded ? "true" : "false");
  });
}

// =====================================================
// 学習状況の表示
// =====================================================
function updateStats() {
  const pool = getFilteredMessages();
  let newCount = 0, reviewCount = 0, okCount = 0;
  pool.forEach(m => {
    const s = getStatus(m.id);
    if (s === "new") newCount++;
    else if (s === "review") reviewCount++;
    else if (s === "ok") okCount++;
  });
  document.getElementById("stat-all").textContent = pool.length;
  document.getElementById("stat-new").textContent = newCount;
  document.getElementById("stat-review").textContent = reviewCount;
  document.getElementById("stat-ok").textContent = okCount;
}

// =====================================================
// めくる(答えを見る)
// =====================================================
let revealed = false;

function reveal() {
  if (currentList.length === 0) return;
  revealed = true;
  document.getElementById("card").classList.remove("covered");
}

function cover() {
  revealed = false;
  document.getElementById("card").classList.add("covered");
}

// =====================================================
// レンダリング
// =====================================================
function render(opts) {
  opts = opts || {};

  if (window.speechSynthesis) {
    speechSynthesis.cancel();
    document.querySelectorAll(".speak-btn").forEach(b => b.classList.remove("speaking"));
  }

  const card = document.getElementById("card");
  const statusBar = document.getElementById("status-bar");
  const navWrap = document.getElementById("nav-wrap");
  const emptyState = document.getElementById("empty-state");

  if (currentList.length === 0) {
    card.style.display = "none";
    statusBar.style.display = "none";
    navWrap.style.display = "none";
    emptyState.style.display = "block";
    emptyState.textContent = state.mode === "study"
      ? "🎉 学習対象のカードがありません（すべて「OK」になっています）"
      : "この条件に当てはまるカードがありません";
    document.getElementById("counter").textContent = "0 / 0";
    document.getElementById("progress-bar").style.width = "0%";
    return;
  }

  card.style.display = "";
  statusBar.style.display = "";
  navWrap.style.display = "";
  emptyState.style.display = "none";

  collapseAllSections();
  cover();

  const msg = currentList[currentIndex];

  document.getElementById("counter").textContent = `${currentIndex + 1} / ${currentList.length}`;
  document.getElementById("progress-bar").style.width = `${((currentIndex + 1) / currentList.length) * 100}%`;

  document.getElementById("english-text").textContent = msg.english;
  document.getElementById("japanese-text").textContent = msg.japanese;
  document.getElementById("explanation-text").textContent = msg.explanation;
  document.getElementById("learning-tip-text").textContent = msg.learningTip;

  // バッジ: 役 + 場面タグ
  const contextEl = document.getElementById("context-badges");
  const roleBadge = `<span class="badge badge-role badge-role-${msg.role}">${ROLE_LABELS[msg.role] || ""}</span>`;
  contextEl.innerHTML = roleBadge + msg.context.map(c => {
    const bg = contextColors[c] || "#f5f5f5";
    const color = contextTextColors[c] || "#333";
    return `<span class="badge" style="background:${bg};color:${color}">${c}</span>`;
  }).join("");

  // 語彙
  const vocabEl = document.getElementById("vocab-list");
  vocabEl.innerHTML = msg.vocabulary.map((v, i) => {
    const word = typeof v === "string" ? v : v.term;
    const term = getTerm(word) || {};
    const meaning = (typeof v === "object" && v.meaning) ? v.meaning : (term.meaning || "");
    const kana = term.katakana || "";
    return `<div class="vocab-item">
      <button class="speak-btn speak-btn-sm" id="vocab-speak-${i}"
              onclick="speakWord(${i})" title="${word} を読み上げる">🔊</button>
      <div class="vocab-word-wrap">
        <span class="vocab-word">${word}</span>
        ${kana ? `<span class="vocab-katakana">${kana}</span>` : ""}
      </div>
      <span class="vocab-meaning">${meaning}</span>
    </div>`;
  }).join("");

  // 学習状態
  const status = getStatus(msg.id);
  const badge = document.getElementById("current-status-badge");
  badge.textContent = STATUS_LABELS[status];
  badge.className = `status-badge status-${status}`;
  document.getElementById("btn-mark-review").classList.toggle("active", status === "review");
  document.getElementById("btn-mark-ok").classList.toggle("active", status === "ok");

  document.getElementById("btn-prev").disabled = currentIndex === 0;
  document.getElementById("btn-next").disabled = currentIndex === currentList.length - 1;

  card.classList.remove("fade-in");
  void card.offsetWidth;
  card.classList.add("fade-in");

  // 次へ進んだ直後は自動で読む(初回表示はブラウザが音を止めるので鳴らさない)
  if (opts.autoplay && state.autoplay) {
    setTimeout(speakFull, 250);
  }
}

// =====================================================
// ナビゲーション
// =====================================================
function goNext() {
  if (currentIndex < currentList.length - 1) {
    currentIndex++;
    persistPosition();
    render({ autoplay: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function goPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    persistPosition();
    render({ autoplay: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function goRandom() {
  if (currentList.length <= 1) return;
  let next;
  do {
    next = Math.floor(Math.random() * currentList.length);
  } while (next === currentIndex);
  currentIndex = next;
  persistPosition();
  render({ autoplay: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goToCardInput() {
  const input = document.getElementById("card-jump-input");
  const n = parseInt(input.value, 10);
  if (currentList.length === 0) return;
  if (!Number.isInteger(n) || n < 1 || n > currentList.length) {
    alert(`カード番号は 1〜${currentList.length} の範囲で入力してください。`);
    return;
  }
  currentIndex = n - 1;
  persistPosition();
  render({ autoplay: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
  input.value = "";
}

// キーボード操作: Space=聞く / Enter=めくる / ←→=前後
document.addEventListener("keydown", e => {
  const tag = (e.target.tagName || "").toLowerCase();
  if (tag === "input" || tag === "select" || tag === "textarea") return;
  if (e.key === " ") { e.preventDefault(); speakFull(); }
  if (e.key === "Enter") { e.preventDefault(); reveal(); }
  if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
  if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
});

// =====================================================
// 初期化
// =====================================================
function syncControls() {
  document.getElementById("mode-select").value = state.mode;
  document.getElementById("scene-select").value = state.scene;
  document.getElementById("role-select").value = state.role;
  document.getElementById("rate-select").value = String(state.rate);
  document.getElementById("autoplay-check").checked = state.autoplay;
}

let state = loadState();
let currentList = [];
let currentIndex = 0;

rebuildList(state.lastIds[state.mode]);
syncControls();
loadVoices();
updateStats();
render();

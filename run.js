// ==UserScript== 
// @name         Zeta 아이메세지 비비드 (입력창 수정판)
// @namespace    zeta-local
// @version      1.2.0
// @description  유저 버블 16색 비비드 + 흰 텍스트, 입력창/답변추천 영역까지 커버
// @match        https://zeta-ai.io/*
// @match        https://frame.pingpong.ai/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function(){ const palette=[ {main:'#007AFF',light:'#A8D4FF'}, {main:'#FF3B30',light:'#FFC1BC'}, {main:'#34C759',light:'#B9F2C6'}, {main:'#FF9500',light:'#FFDCAE'}, {main:'#AF52DE',light:'#E5C7F5'}, {main:'#FF6482',light:'#FFCBD6'}, {main:'#5AC8FA',light:'#C6EEFF'}, {main:'#5856D6',light:'#C9C8F5'}, {main:'#00C7A2',light:'#B2F2E5'}, {main:'#FF2D78',light:'#FFC1D9'}, {main:'#8B5E3C',light:'#D9BFA6'}, {main:'#FFD60A',light:'#FFF3B0'}, {main:'#8BC34A',light:'#D7F0B0'}, {main:'#9D7FEA',light:'#D9CCFA'}, {main:'#FF6F5E',light:'#FFC9C0'}, {main:'#17A2B8',light:'#B0E6EE'} ]; const c=palette[Math.floor(Math.random()*palette.length)]; if(window.__chatThemeObserver){window.__chatThemeObserver.disconnect();window.__chatThemeObserver=null;} document.querySelectorAll('style[data-chat-theme]').forEach(e=>e.remove()); if(window.CSS&&CSS.highlights){CSS.highlights.delete('fruit-hl');} document.querySelectorAll('.fruit-hl').forEach(span=>{const parent=span.parentNode;if(parent){parent.replaceChild(document.createTextNode(span.textContent),span);parent.normalize();}}); document.querySelectorAll('.fruit-user-bubble,.fruit-char-bubble').forEach(el=>{el.classList.remove('fruit-user-bubble','fruit-char-bubble');}); const s=document.createElement('style'); s.setAttribute('data-chat-theme','imessage-vivid'); s.textContent=`html,body,main,section,form,aside,nav{background:#FFFFFF!important;color:#000000!important;}div:not([class*="bg-"]){background-color:transparent!important;}[class*="bg-bubble-user"],.self-end[class*="rounded-l-xl"]{background-color:${c.main}!important;border-radius:18px!important;border:none!important;}[class*="bg-bubble-user"] *,.self-end[class*="rounded-l-xl"] *{color:#FFFFFF!important;-webkit-text-fill-color:#FFFFFF!important;}[class*="bg-bubble-user"] em,[class*="bg-bubble-user"] i,.self-end[class*="rounded-l-xl"] em,.self-end[class*="rounded-l-xl"] i,[class*="bg-bubble-user"] em *,[class*="bg-bubble-user"] i *,.self-end[class*="rounded-l-xl"] em *,.self-end[class*="rounded-l-xl"] i *{color:${c.light}!important;-webkit-text-fill-color:${c.light}!important;font-style:italic!important;}[class*="bg-gray-sub1"],.self-start[class*="bg-white"],[class*="self-start"][class*="bg-white"],.self-start[class*="bg-gray"]{background-color:#E5E5EA!important;background-image:none!important;border-radius:18px!important;border:none!important;}[class*="bg-gray-sub1"] *,.self-start[class*="bg-white"] *,.self-start[class*="bg-gray"] *{color:#000000!important;-webkit-text-fill-color:#000000!important;}[class*="bg-gray-sub1"] em,[class*="bg-gray-sub1"] i,.self-start[class*="bg-white"] em,.self-start[class*="bg-white"] i,.self-start[class*="bg-gray"] em,.self-start[class*="bg-gray"] i,[class*="bg-gray-sub1"] em *,.self-start[class*="bg-white"] em *{color:#888888!important;-webkit-text-fill-color:#888888!important;font-style:italic!important;}[class*="bg-gray-main"]{background-color:#FFFFFF!important;background-image:none!important;border:none!important;color:#000000!important;}[class*="bg-primary-400"]{background-color:#E5E5EA!important;}[class*="bg-gray-sub2"]{background-color:#F2F2F7!important;}[data-testid="chat-send-button"]{background-color:${c.main}!important;}button:has(img[alt="zeta"]),button[class*="zeta"],[class*="zeta-button"]{background:rgba(0,0,0,0.08)!important;opacity:0.5!important;}::-webkit-scrollbar-thumb{background:#C1C1C1!important;border-radius:999px!important;}p,span,div,.text-white,[class*="text-white"],[class*="text-gray"]{color:#000000!important;}[class*="text-gray-400"],[class*="text-gray-500"]{color:#8E8E93!important;}textarea,input{font-size:14px!important;} html body div[data-sentry-source-file="ChatRoomInputArea.tsx"],html body [data-sentry-component="ChatComposer"]>div:last-child{background:#FFFFFF!important;background-color:#FFFFFF!important;background-image:none!important;border:0!important;border-top:0!important;border-color:transparent!important;outline:0!important;box-shadow:none!important;} html body [data-sentry-component="ChatInput"],html body :is([data-sentry-component="ChatRoomInputLeftArea"],[data-sentry-source-file="ChatRoomInputLeftArea.tsx"]){background:transparent!important;background-color:transparent!important;background-image:none!important;border:0!important;outline:0!important;box-shadow:none!important;} html body :is([data-sentry-component="ChatInput"]>div:has(>textarea[name="message"]),div[data-sentry-source-file="ChatInput.tsx"]:has(>textarea[name="message"]),[data-sentry-component="ChatComposer"] div:has(>textarea[name="message"]),div:has(>textarea[name="message"][placeholder="내용 입력하기"])){background:#F2F2F7!important;background-color:#F2F2F7!important;background-image:none!important;border:1px solid #E5E5EA!important;border-radius:20px!important;box-shadow:none!important;} html body textarea[name="message"]{background:transparent!important;background-color:transparent!important;color:#000000!important;-webkit-text-fill-color:#000000!important;caret-color:${c.main}!important;border:0!important;outline:0!important;box-shadow:none!important;} html body textarea[name="message"]::placeholder{color:#8E8E93!important;-webkit-text-fill-color:#8E8E93!important;opacity:1!important;} html body [data-sentry-component="QuickReplyButton"]>span.caption2,html body div:has(>button:is([aria-label="Suggested replies"],[aria-label="Close suggested replies"]))>span.caption2{display:none!important;} html body :is([data-sentry-component="ChatRoomInputLeftArea"],[data-sentry-source-file="ChatRoomInputLeftArea.tsx"])>button,html body [data-sentry-component="QuickReplyButton"]>button,html body button:is([aria-label="Suggested replies"],[aria-label="Close suggested replies"]),html body button:has(path[d^="M13.802 3.112"]){background:#F2F2F7!important;background-color:#F2F2F7!important;background-image:none!important;border:1px solid #E5E5EA!important;border-radius:9999px!important;box-shadow:none!important;color:#000000!important;opacity:1!important;} html body :is([data-sentry-component="ChatRoomInputLeftArea"],[data-sentry-source-file="ChatRoomInputLeftArea.tsx"])>button>span,html body [data-sentry-component="QuickReplyButton"]>button>span,html body button:is([aria-label="Suggested replies"],[aria-label="Close suggested replies"])>span{background:transparent!important;background-color:transparent!important;background-image:none!important;} html body :is([data-sentry-component="ChatRoomInputLeftArea"],[data-sentry-source-file="ChatRoomInputLeftArea.tsx"])>button :is(svg,svg *),html body [data-sentry-component="QuickReplyButton"]>button :is(svg,svg *),html body button:is([aria-label="Suggested replies"],[aria-label="Close suggested replies"]) :is(svg,svg *),html body button:has(path[d^="M13.802 3.112"]) :is(svg,svg *){color:#000000!important;fill:currentColor!important;stroke:currentColor!important;} html body :is(button[aria-label="Insert asterisk"],button:has(path[d^="M8.195 2v12"])){background:transparent!important;background-color:transparent!important;background-image:none!important;border:0!important;box-shadow:none!important;color:${c.main}!important;} html body :is(button[aria-label="Insert asterisk"],button:has(path[d^="M8.195 2v12"])) :is(svg,svg *){color:${c.main}!important;fill:none!important;stroke:${c.main}!important;} html body button[data-testid="chat-send-button"]{background:${c.main}!important;background-color:${c.main}!important;background-image:none!important;border:1px solid #E5E5EA!important;border-radius:9999px!important;box-shadow:none!important;color:#FFFFFF!important;opacity:1!important;} html body button[data-testid="chat-send-button"] :is(svg,svg *){color:#FFFFFF!important;fill:#FFFFFF!important;stroke:#FFFFFF!important;} html body [data-testid="chat-bottom-dock"] [class*="bg-linear-to-b"]{background-color:transparent!important;background-image:linear-gradient(to bottom,rgba(255,255,255,0),#FFFFFF 60%)!important;}html body [data-testid="chat-header-model"]{background:#E5E5EA!important;background-color:#E5E5EA!important;color:#000000!important;}html body [data-testid="chat-header-model"] *{color:#000000!important;-webkit-text-fill-color:#000000!important;}`; document.head.appendChild(s); })();
// ============================================================
//  문자메시지 말풍선 변환 모듈
//  - 줄/문장 중간의 `> 내용` (줄 끝까지) 과 `[내용]` 을 문자 말풍선으로 변환
//  - `>` / `[ ]` 기호는 말풍선에서 삭제
//  - `>`끼리, `[]`끼리 줄이 연속되면 한 메시지(줄바꿈 유지)
//  - 사이에 다른 지문이 끼면 별개 메시지
// ============================================================
(function () {
  'use strict';

  // 재실행 대비: 이전 인스턴스 정리
  if (window.__zetaSms) {
    try { window.__zetaSms.destroy(); } catch (_) {}
  }

  // true 로 바꾸면 문단(<p>)이 달라도 바로 다음 줄이면 한 메시지로 합침
  // (기본 false: 빈 줄로 띄운 문단 = 별개 메시지)
  const MERGE_ACROSS_BLOCKS = false;

  const SETTLE_MS = 900;   // 텍스트가 이 시간 동안 안 바뀌어야(스트리밍 끝) 변환
  const DEBOUNCE_MS = 300;

  const BUBBLE_SELS = [
    '[class*="bg-bubble-user"]',
    '.self-end[class*="rounded-l-xl"]',
    '[class*="bg-gray-sub1"]',
    '.self-start[class*="bg-white"]',
    '.self-start[class*="bg-gray"]',
  ];
  const BUBBLE_SEL = BUBBLE_SELS.join(',');

  const HARD_SKIP = '.zeta-sms, blockquote, pre';
  const SOFT_SKIP = 'button, textarea, input, script, style, svg, code, [contenteditable="true"]';
  const BLOCK_TAGS = new Set([
    'P', 'DIV', 'LI', 'UL', 'OL', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6',
    'BLOCKQUOTE', 'PRE', 'TABLE', 'TR', 'SECTION', 'ARTICLE',
  ]);

  // ---------- 1) DOM -> 평문 + 위치표 ----------
  function linearize(root) {
    const items = []; // {node, start, len}
    let full = '';
    let afterBr = false;

    function nl(n) {
      let have = 0;
      while (have < 2 && full.charAt(full.length - 1 - have) === '\n') have++;
      for (let i = have; i < n; i++) full += '\n';
    }

    (function walk(parent) {
      for (let c = parent.firstChild; c; c = c.nextSibling) {
        if (c.nodeType === 3) {
          let t = c.nodeValue;
          if (!t.length) continue;
          // <br> 바로 뒤의 "\n" 은 같은 줄바꿈이므로 길이는 유지하되 공백으로 취급
          if (afterBr && t.charAt(0) === '\n') t = ' ' + t.slice(1);
          afterBr = false;
          items.push({ node: c, start: full.length, len: t.length });
          full += t;
        } else if (c.nodeType === 1) {
          if (c.nodeName === 'BR') { full += '\n'; afterBr = true; continue; }
          if (c.matches(HARD_SKIP)) { nl(2); afterBr = false; continue; }
          if (c.matches(SOFT_SKIP)) continue;
          const isBlock = BLOCK_TAGS.has(c.nodeName);
          if (isBlock) { nl(MERGE_ACROSS_BLOCKS ? 1 : 2); afterBr = false; }
          walk(c);
          if (isBlock) { nl(MERGE_ACROSS_BLOCKS ? 1 : 2); afterBr = false; }
        }
      }
    })(root);

    return { items, full };
  }

  // ---------- 2) 평문에서 메시지 토큰 찾기 ----------
  function isMarkerGt(line, idx) {
    const prev = line.charAt(idx - 1);
    const next = line.charAt(idx + 1);
    if (prev === '-' || prev === '=' || prev === '<') return false;   // ->, =>, <>
    if (next === '=') return false;                                    // >=
    if (/^>[^\s<>]{0,2}</.test(line.slice(idx, idx + 5))) return false; // >_<  >.<  ><
    const lt = line.lastIndexOf('<', idx);                             // <이름> 의 닫는 >
    if (lt >= 0 && line.slice(lt + 1, idx).indexOf('>') < 0) return false;
    return true;
  }

  function findGt(line, from) {
    let i = line.indexOf('>', from);
    while (i >= 0) {
      if (isMarkerGt(line, i)) return i;
      i = line.indexOf('>', i + 1);
    }
    return -1;
  }

  function trimBounds(str, absStart) {
    const lead = str.length - str.replace(/^[\s>]+/, '').length;
    const body = str.slice(lead).replace(/\s+$/, '');
    return { cs: absStart + lead, ce: absStart + lead + body.length, empty: !body.length };
  }

  function scanLine(line, base, out) {
    const re = /\[([^\[\]\n]+)\](?!\()/g;
    let pos = 0;
    while (pos < line.length) {
      re.lastIndex = pos;
      const m = re.exec(line);
      const g = findGt(line, pos);
      if (m && (g < 0 || m.index < g)) {
        const innerStart = m.index + 1;
        // [ ] 안쪽 앞뒤 공백만 정리
        const lead = m[1].length - m[1].replace(/^\s+/, '').length;
        const body = m[1].slice(lead).replace(/\s+$/, '');
        if (body.length) {
          out.push({
            type: 'br',
            start: base + m.index,
            end: base + m.index + m[0].length,
            cs: base + innerStart + lead,
            ce: base + innerStart + lead + body.length,
          });
        }
        pos = m.index + m[0].length;
      } else if (g >= 0) {
        const rest = line.slice(g + 1);
        const b = trimBounds(rest, base + g + 1);
        if (!b.empty) {
          out.push({ type: 'gt', start: base + g, end: base + line.length, cs: b.cs, ce: b.ce });
        }
        break;
      } else {
        break;
      }
    }
  }

  function findTokens(full) {
    const tokens = [];
    let lineStart = 0;
    full.split('\n').forEach((line) => {
      scanLine(line, lineStart, tokens);
      lineStart += line.length + 1;
    });
    return tokens;
  }

  // 바로 이어지는 줄(사이에 공백/줄바꿈 1개 이하)이면 한 메시지로 묶음
  function groupTokens(tokens, full) {
    const groups = [];
    tokens.forEach((t) => {
      const g = groups[groups.length - 1];
      if (g) {
        const prev = g[g.length - 1];
        const gap = full.slice(prev.end, t.start);
        if (/^[^\S\n]*\n?[^\S\n]*$/.test(gap)) { g.push(t); return; }
      }
      groups.push([t]);
    });
    return groups;
  }

  // ---------- 3) DOM 에 적용 ----------
  function locate(items, pos, isEnd) {
    for (let i = 0; i < items.length; i++) {
      const it = items[i];
      const a = it.start;
      const b = it.start + it.len;
      if (isEnd ? (pos > a && pos <= b) : (pos >= a && pos < b)) return [it.node, pos - a];
    }
    return null;
  }

  function applyGroup(items, group) {
    const bubble = document.createElement('span');
    bubble.className = 'zeta-sms';
    bubble.setAttribute('data-zeta-sms', '1');

    group.forEach((t, i) => {
      const s = locate(items, t.cs, false);
      const e = locate(items, t.ce, true);
      if (!s || !e) throw new Error('locate failed');
      const r = document.createRange();
      r.setStart(s[0], s[1]);
      r.setEnd(e[0], e[1]);
      if (i) bubble.appendChild(document.createElement('br'));
      bubble.appendChild(r.cloneContents());
    });

    const first = group[0];
    const last = group[group.length - 1];
    const s0 = locate(items, first.start, false);
    const e0 = locate(items, last.end, true);
    if (!s0 || !e0) throw new Error('locate span failed');
    const span = document.createRange();
    span.setStart(s0[0], s0[1]);
    span.setEnd(e0[0], e0[1]);
    span.deleteContents();
    span.insertNode(bubble);

    // 말풍선은 블록이라 뒤따르는 줄바꿈 1개는 제거 (빈 줄 방지)
    let n = bubble.nextSibling;
    while (n && n.nodeType === 3 && n.nodeValue === '') {
      const nx = n.nextSibling;
      n.parentNode.removeChild(n);
      n = nx;
    }
    if (n) {
      if (n.nodeType === 3) n.nodeValue = n.nodeValue.replace(/^[^\S\n]*\n?/, '');
      else if (n.nodeName === 'BR') n.parentNode.removeChild(n);
    }
  }

  function processContainer(root) {
    const { items, full } = linearize(root);
    if (!/[\[>]/.test(full)) return false;
    const tokens = findTokens(full);
    if (!tokens.length) return false;
    const groups = groupTokens(tokens, full);
    // 뒤에서부터 적용해야 앞쪽 위치가 안 밀림
    for (let k = groups.length - 1; k >= 0; k--) {
      try { applyGroup(items, groups[k]); } catch (_) {}
    }
    return true;
  }

  // ---------- 4) 스타일 ----------
  const ID = ':not(#zeta-sms-x)'; // 특이도 부스터 (테마의 !important 규칙을 이김)
  const inBubble = BUBBLE_SELS.join(',');
  const css = `
html body .zeta-sms${ID},
html body :is(${inBubble}) blockquote${ID}{
  display:block!important;width:fit-content!important;max-width:100%!important;box-sizing:border-box!important;
  margin:6px 0!important;padding:7px 13px!important;
  background:#FFFFFF!important;background-color:#FFFFFF!important;background-image:none!important;
  border:1px solid #E5E5EA!important;border-radius:18px!important;box-shadow:none!important;
  color:#000000!important;-webkit-text-fill-color:#000000!important;
  font-style:normal!important;font-size:0.95em!important;line-height:1.45!important;
  text-align:left!important;overflow-wrap:break-word!important;quotes:none!important;
}
html body :is(${inBubble}) blockquote${ID}::before,
html body :is(${inBubble}) blockquote${ID}::after{content:none!important;}
html body .zeta-sms${ID} *,
html body :is(${inBubble}) blockquote${ID} *{
  color:#000000!important;-webkit-text-fill-color:#000000!important;
}
html body :is(${inBubble}) blockquote${ID} p{margin:0!important;}
html body .zeta-sms${ID} em,html body .zeta-sms${ID} i,
html body :is(${inBubble}) blockquote${ID} em,html body :is(${inBubble}) blockquote${ID} i{
  font-style:italic!important;color:#8E8E93!important;-webkit-text-fill-color:#8E8E93!important;
}
`;
  const style = document.createElement('style');
  style.setAttribute('data-zeta-sms-style', '1');
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);

  // ---------- 5) 감시 / 스케줄 ----------
  const cache = new WeakMap(); // 컨테이너 -> {txt, t, done}
  let timer = null;
  let observer = null;
  let destroyed = false;

  function schedule(ms) {
    if (destroyed) return;
    clearTimeout(timer);
    timer = setTimeout(scan, ms);
  }

  function scan() {
    if (destroyed) return;
    timer = null;
    const now = Date.now();
    let pending = false;

    document.querySelectorAll(BUBBLE_SEL).forEach((el) => {
      if (el.querySelector(BUBBLE_SEL)) return; // 가장 안쪽 말풍선만
      if (el.querySelector('textarea, input')) return; // 입력창 박스(composer-input-box)는 말풍선 아님
      const txt = el.textContent || '';
      if (!/[\[>]/.test(txt)) return;
      const e = cache.get(el);
      if (e && e.txt === txt) {
        if (e.done) return;
        if (now - e.t >= SETTLE_MS) {
          try { processContainer(el); } catch (_) {}
          cache.set(el, { txt: el.textContent || '', t: now, done: true });
        } else {
          pending = true;
        }
      } else {
        cache.set(el, { txt, t: now, done: false });
        pending = true;
      }
    });

    if (observer) observer.takeRecords(); // 내 변경으로 생긴 기록은 버림
    if (pending) schedule(SETTLE_MS + 100);
  }

  observer = new MutationObserver(() => schedule(DEBOUNCE_MS));
  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true,
  });
  schedule(500);

  window.__zetaSms = {
    destroy() {
      destroyed = true;
      clearTimeout(timer);
      if (observer) observer.disconnect();
      style.remove();
    },
  };
})();

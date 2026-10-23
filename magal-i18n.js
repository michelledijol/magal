(function () {
  if (window.magalT) return;
  var D = {
    'Collection': 'Colección', 'Colours': 'Colores', 'About us': 'Nosotros', 'Enquire': 'Consultar', 'Enquire →': 'Consultar →',
    'Craft': 'Oficio', 'Anatomy': 'Anatomía', 'New arrival': 'Novedad', 'Discover': 'Descubrir', 'The story': 'La historia',
    '“For the purists, only the purest”': '“Para los puristas, solo lo más puro”',
    'For the purists, only the purest': 'Para los puristas, solo lo más puro',
    'Rise up, girls!': '¡Arriba, chicas!', 'All is pure, for the purest': 'Todo es puro para los más puros',
    '42 mm · Automatic · Sapphire': '42 mm · Automático · Zafiro',
    'omnia revelat': 'omnia revelat',
    'Conceived by Massimiliano Wax and named after his sons — MA·GA·L. Every element was drawn by hand: the octagonal case, the interchangeable straps, the certified movement on show.': 'Concebido por Massimiliano Wax y bautizado con los nombres de sus hijos — MA·GA·L. Cada elemento se dibujó a mano: la caja octogonal, las correas intercambiables, el movimiento certificado a la vista.',
    'Puella, Surge — get your favourite colour': 'Puella, Surge — elige tu color favorito',
    'Ask': 'Consultar', 'Sporty or casual?': '¿Deportivo o casual?', 'Crocodile': 'Cocodrilo', 'vs. lizard': 'o lagarto', 'vs. lizard.': 'o lagarto.',
    'Micro-grooved FKM rubber for every day, or crocodile and Louisiana lizard leather for warmth and elegance. The strap changes in seconds.': 'Caucho FKM microestriado para el día a día, o piel de cocodrilo y lagarto de Luisiana para la calidez y la elegancia. La correa se cambia en segundos.',
    'Find the one that is yours': 'Encuentra el que es tuyo',
    'Availability, sizes and colours — we answer personally on WhatsApp.': 'Disponibilidad, tamaños y colores: respondemos personalmente por WhatsApp.',
    'Navigate': 'Navegar', 'Contact': 'Contacto', '© 2026 MAGAL. All rights reserved.': '© 2026 MAGAL. Todos los derechos reservados.',
    'Skeleton · Rubber strap': 'Esqueleto · Correa de caucho', 'Automatic · Rubber or leather': 'Automático · Caucho o piel', 'Automatic · Red dial': 'Automático · Esfera roja',
    'Time reveals everything': 'El tiempo lo revela todo', 'Scroll': 'Desliza', 'The house': 'La casa',
    'Open-worked case back': 'Fondo abierto', 'The heart, always in sight.': 'El corazón, siempre a la vista.',
    'The': 'La', 'Three watches · One octagon': 'Tres relojes · Un octógono',
    'Interchangeable straps': 'Correas intercambiables',
    'Micro-grooved FKM rubber for every day. Crocodile and Louisiana lizard for the evening. The strap changes in seconds.': 'Caucho FKM microestriado para cada día. Cocodrilo y lagarto de Luisiana para la noche. La correa se cambia en segundos.',
    'Private enquiries': 'Consultas privadas', 'Unmistakably': 'Inconfundiblemente', 'yours.': 'tuyo.', 'Unmistakably yours.': 'Inconfundiblemente tuyo.',
    'The case': 'La caja', 'A signature octagon': 'Un octógono propio',
    'Drawn by Massimiliano Wax. 36 mm for Puella, Surge; 42 mm for Omnia Munda and Fecit Potentiam.': 'Dibujado por Massimiliano Wax. 36 mm para Puella, Surge; 42 mm para Omnia Munda y Fecit Potentiam.',
    'The crystal': 'El cristal', 'Sapphire, UV anti-glare': 'Zafiro, antirreflejo UV',
    'Scratch-resistant clarity over a dial that reads in any light.': 'Nitidez resistente a los arañazos sobre una esfera que se lee con cualquier luz.',
    'The movement': 'El movimiento', 'Certified, open-worked': 'Certificado, a la vista',
    'An automatic mechanical heart, left visible through the case back.': 'Un corazón mecánico automático, visible a través del fondo.',
    'An automatic skeleton timepiece with a clean bezel or brilliant crystal-set accents. A refined blend of craftsmanship, precision and contemporary design.': 'Un reloj esqueleto automático con bisel limpio o con brillantes detalles de cristal. Una refinada mezcla de artesanía, precisión y diseño contemporáneo.',
    'A seamless fusion of exceptional craftsmanship, precision engineering and contemporary design — sporty on rubber, timeless on leather.': 'Una fusión perfecta de artesanía excepcional, ingeniería de precisión y diseño contemporáneo: deportivo en caucho, atemporal en piel.',
    'The deep red dial in the signature octagon. For the purist who wants the movement, and nothing else, to speak.': 'La esfera rojo intenso en el octógono de la casa. Para el purista que quiere que hable el movimiento y nada más.',
    'Case': 'Caja', 'Crystal': 'Cristal', 'Movement': 'Movimiento', 'Strap': 'Correa', 'Dial': 'Esfera', 'Back': 'Fondo',
    '36 mm octagonal': '36 mm octogonal', '36 / 42 mm octagonal': '36 / 42 mm octogonal', 'Opción': 'Opción', '42 mm octagonal': '42 mm octogonal',
    'Automatic skeleton, manual-wind': 'Esqueleto automático, carga manual', 'Integrated FKM rubber, micro-grooved': 'Caucho FKM integrado, microestriado',
    'Automatic, open-worked back': 'Automático, fondo abierto', 'FKM rubber, crocodile or lizard': 'Caucho FKM, cocodrilo o lagarto',
    'Deep red': 'Rojo intenso', 'Red dial': 'Esfera roja', 'Crystal bezel': 'Bisel de cristal',
    'Black': 'Negro', 'Red': 'Rojo', 'Blue': 'Azul', 'Green': 'Verde', 'Navy': 'Azul marino', 'White': 'Blanco', 'Bordeaux': 'Burdeos', 'Lizard': 'Lagarto', 'Louisiana Lizard': 'Lagarto de Luisiana', 'Fecit Potentiam': 'Fecit Potentiam',
    'Automatic skeleton': 'Esqueleto automático', 'Open-worked': 'Abierto', 'Integrated FKM rubber': 'Caucho FKM integrado',
    'Mechanical · Automatic · Octagonal': 'Mecánico · Automático · Octogonal',
    'Time': 'El tiempo', 'reveals': 'lo revela', 'everything.': 'todo.',
    'Born from family, curiosity and a passion for watchmaking.': 'Nacida de la familia, la curiosidad y la pasión por la relojería.',
    'Every element conceived by hand — an octagon, a movement on show, a strap that changes in seconds.': 'Cada elemento pensado a mano: un octógono, un movimiento a la vista, una correa que se cambia en segundos.',
    'Three': 'Tres', 'watches.': 'relojes.', 'One octagon': 'Un octógono',
    'The heart,': 'El corazón,', 'always': 'siempre', 'in sight.': 'a la vista.',
    'Certified automatic movement · sapphire, UV anti-glare · 36 / 42 mm octagonal case.': 'Movimiento automático certificado · zafiro antirreflejo UV · caja octogonal de 36 / 42 mm.',
    'Ref. PS-36 · Skeleton': 'Ref. PS-36 · Esqueleto', 'Rise up, girls! — 36 mm automatic skeleton.': '¡Arriba, chicas! — Esqueleto automático de 36 mm.',
    'A · Octagon case': 'A · Caja octogonal', 'B · Sapphire': 'B · Zafiro', 'C · FKM strap': 'C · Correa FKM',
    '00 — Manifesto': '00 — Manifiesto',
    'Not simply different. Unmistakably its own. A house built by Massimiliano, Gabriele and Alessandro — MA·GA·L.': 'No simplemente distinto. Inconfundiblemente propio. Una casa construida por Massimiliano, Gabriele y Alessandro — MA·GA·L.',
    '01 Collection — every colourway': '01 Colección — todos los colores', '10 references': '10 referencias',
    '02 — Straps': '02 — Correas', 'Changes in seconds.': 'Se cambia en segundos.',
    'Micro-grooved FKM rubber for every day. Crocodile and Louisiana lizard for the evening.': 'Caucho FKM microestriado para cada día. Cocodrilo y lagarto de Luisiana para la noche.',
    'WhatsApp →': 'WhatsApp →', 'Fecit Potentiam · 42 mm': 'Fecit Potentiam · 42 mm',
    'One dial.': 'Una esfera.', 'Six ways.': 'Seis estilos.',
    'The same deep red dial, dressed in crocodile or Louisiana lizard — black, bordeaux or navy. Pick yours, or own the set: the strap changes in seconds.': 'La misma esfera rojo intenso, vestida de cocodrilo o lagarto de Luisiana en negro, burdeos o azul marino. Elige la tuya o quédate con todas: la correa se cambia en segundos.',
    '01 Collection': '01 Colección', '02 Anatomy': '02 Anatomía', '03 Straps': '03 Correas',
    'Not simply different.': 'No simplemente distinto.', 'Unmistakably its own.': 'Inconfundiblemente propio.',
    '03 — Movement': '03 — Movimiento', '04 — Collection': '04 — Colección', '05 — Straps': '05 — Correas', '06 — Contact': '06 — Contacto',
    'Pick a colour': 'Elige un color', 'Five colourways': 'Cinco colores', 'One colourway': 'Un color',
    'Crocodile, lizard or rubber.': 'Cocodrilo, lagarto o caucho.', 'Tempus omnia revelat — time reveals everything.': 'Tempus omnia revelat — el tiempo lo revela todo.',
    'Hello MAGAL, I would like to know more about your watches.': 'Hola MAGAL, me gustaría saber más sobre vuestros relojes.',
    'Born from family, curiosity and a passion for watchmaking. Every element conceived by hand — an octagon, a movement on show, a strap that changes in seconds. Not simply different. Unmistakably its own.': 'Nacida de la familia, la curiosidad y la pasión por la relojería. Cada elemento pensado a mano: un octógono, un movimiento a la vista, una correa que se cambia en segundos. No simplemente distinto. Inconfundiblemente propio.'
  };
  var KEY = 'magal-lang';
  var lang = (function () { try { return localStorage.getItem(KEY) || 'en'; } catch (e) { return 'en'; } })();
  window.magalLang = function () { return lang; };
  window.magalT = function (s) { return lang === 'es' && D[s] ? D[s] : s; };
  var orig = new WeakMap(), shown = new WeakMap();
  function tNode(n) {
    var cur = n.nodeValue;
    if (shown.get(n) !== cur) orig.set(n, cur);
    var o = orig.get(n), k = o.trim();
    var out = (lang === 'es' && D[k]) ? o.replace(k, D[k]) : o;
    shown.set(n, out);
    if (out !== cur) n.nodeValue = out;
  }
  function walk(root) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n;
    while ((n = w.nextNode())) { var p = n.parentNode; if (p && (p.nodeName === 'SCRIPT' || p.nodeName === 'STYLE')) continue; if (/[A-Za-z]/.test(n.nodeValue)) tNode(n); }
  }
  var busy = false;
  function run() { if (busy) return; busy = true; walk(document.body); busy = false; paintBtn(); }
  var mo = new MutationObserver(function (ms) {
    if (busy) return; busy = true;
    ms.forEach(function (m) {
      if (m.type === 'characterData') tNode(m.target);
      else m.addedNodes.forEach(function (a) { if (a.nodeType === 3) tNode(a); else if (a.nodeType === 1) walk(a); });
    });
    busy = false;
  });
  function set(l) {
    if (l === lang) return;
    lang = l; try { localStorage.setItem(KEY, l); } catch (e) {}
    document.documentElement.lang = l;
    run();
    window.dispatchEvent(new Event('magal-lang'));
    try { if (window.parent !== window) window.parent.postMessage({ magalLang: l }, '*'); } catch (e) {}
    for (var i = 0; i < window.frames.length; i++) try { window.frames[i].postMessage({ magalLang: l }, '*'); } catch (e) {}
  }
  window.magalSetLang = set;
  window.addEventListener('message', function (e) { if (e.data && e.data.magalLang) set(e.data.magalLang); });
  window.addEventListener('storage', function (e) { if (e.key === KEY && e.newValue) set(e.newValue); });
  var btn;
  function paintBtn() {
    if (!btn) return;
    btn.children[0].style.cssText = 'padding:0 12px;height:100%;display:flex;align-items:center;' + (lang === 'es' ? 'background:#231f20;color:#fff' : 'color:#231f20');
    btn.children[1].style.cssText = 'padding:0 12px;height:100%;display:flex;align-items:center;' + (lang === 'en' ? 'background:#231f20;color:#fff' : 'color:#231f20');
  }
  function mountBtn() {
    var inParent = false; try { inParent = window.parent !== window && !!window.parent.magalSetLang; } catch (e) {}
    if (inParent) return;
    btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Idioma / Language');
    btn.style.cssText = 'position:fixed;left:16px;bottom:16px;z-index:9999;display:flex;height:44px;padding:0;border:1px solid #231f20;background:#fff;font:600 11px/1 "Nunito Sans",sans-serif;letter-spacing:0.2em;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,0.2)';
    btn.innerHTML = '<span>ES</span><span>EN</span>';
    btn.onclick = function () { set(lang === 'es' ? 'en' : 'es'); };
    document.body.appendChild(btn);
    paintBtn();
  }
  function start() {
    document.documentElement.lang = lang;
    mountBtn(); run();
    mo.observe(document.body, { subtree: true, childList: true, characterData: true });
  }
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();

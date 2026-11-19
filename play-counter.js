(() => {
  const config = document.querySelector('meta[name="game-click-counter"]');
  const loopback = ["localhost", "127.0.0.1", "[::1]"].includes(location.hostname);
  const endpoint = loopback ? "http://127.0.0.1:8754/counts" :
    location.protocol === "https:" ? config?.content : "";
  if (!endpoint) return;

  const labels = new Map();
  const lastClick = new Map();
  const repeatWindow = 2000;
  const format = new Intl.NumberFormat("zh-CN");
  const request = new URL(endpoint);
  request.searchParams.set("gallery", config.dataset.gallery);

  function render(id, clicks) {
    const item = labels.get(id);
    if (!item || !Number.isSafeInteger(clicks) || clicks < item.clicks) return;
    item.clicks = clicks;
    const number = format.format(clicks);
    item.number.textContent = number;
    item.label.setAttribute("aria-label", "试玩点击 " + number + " 次");
    item.label.hidden = false;
  }

  async function fetchCounts(url, method = "GET") {
    const result = await fetch(url, {
      method, credentials: "omit", referrerPolicy: "no-referrer", keepalive: method === "POST",
    });
    if (!result.ok) throw new Error("Click counter unavailable");
    return result.json();
  }

  function attach(link, parent, game) {
    const id = game.counterId ?? game.id ?? game.name.normalize("NFKC").trim().toLowerCase();
    const label = document.createElement("span");
    label.className = "play-click-count";
    label.hidden = true;
    label.title = "试玩点击次数";
    label.setAttribute("role", "img");

    const svgNamespace = "http://www.w3.org/2000/svg";
    const flame = document.createElementNS(svgNamespace, "svg");
    flame.setAttribute("viewBox", "0 0 24 24");
    flame.setAttribute("aria-hidden", "true");
    const shape = document.createElementNS(svgNamespace, "path");
    shape.setAttribute("d", "M13.2 2.5c.4 4-2.1 5.4-2.9 8.1-1.1-.8-1.6-2-1.5-3.4-2.5 2.2-4.2 4.6-4.2 7.5a7.4 7.4 0 0 0 14.8 0c0-3.9-2.4-7.8-6.2-12.2Zm-1.2 17.2a3 3 0 0 1-3-3c0-1.4.9-2.7 2-3.7.2 1 .6 1.5 1.1 1.9.4-.9 1.2-1.6 1.3-2.8 1.1 1.2 1.6 2.9 1.6 4.6a3 3 0 0 1-3 3Z");
    flame.append(shape);

    const number = document.createElement("span");
    label.append(flame, number);
    parent.append(label);
    labels.set(id, { label, number, clicks: 0 });

    const url = new URL(request);
    url.searchParams.set("game", id);
    function record(event) {
      if (event.defaultPrevented) return;
      const now = performance.now();
      if (now - (lastClick.get(id) ?? -Infinity) < repeatWindow) return;
      lastClick.set(id, now);
      fetchCounts(url, "POST").then(data => render(id, data.clicks)).catch(() => {});
    }
    link.addEventListener("click", record);
    link.addEventListener("auxclick", event => {
      if (event.button === 1) record(event);
    });
  }

  async function load() {
    if (!labels.size) return;
    try {
      const { counts } = await fetchCounts(request);
      for (const [id, clicks] of Object.entries(counts)) render(id, clicks);
    } catch {
      // Keep links usable and leave unavailable counts hidden.
    }
  }

  window.galleryPlayCounter = { attach, load };
})();

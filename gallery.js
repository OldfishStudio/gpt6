const reusable = new Set(["MIT", "Apache-2.0", "zlib", "CC0-1.0"]);
const sourceLabels = {
  project: "项目源码",
  single: "单文件源码",
  entry: "仅试玩入口",
  build: "仅构建产物",
  unverified: "未找到公开源码",
};
const list = document.querySelector("#games");
const search = document.querySelector("#search");
const filter = document.querySelector("#filter");
const count = document.querySelector("#count");
const playCounter = window.galleryPlayCounter;

function element(tag, className, text) {
  const node = document.createElement(tag);
  node.className = className;
  if (text) node.textContent = text;
  return node;
}

function link(label, url) {
  const anchor = element("a", "", label);
  anchor.href = url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  return anchor;
}

function cover(game, index) {
  const frame = element("figure", "cover");
  frame.style.setProperty("--hue", String((index * 43 + 155) % 360));
  const placeholder = element("div", "placeholder");
  placeholder.append(element("strong", "", game.name));
  frame.append(placeholder);

  const caption = element("figcaption", "", "图鉴封面");
  if (game.image) {
    const image = element("img", "screenshot");
    image.alt = game.name + " 游戏画面";
    image.loading = "lazy";
    image.decoding = "async";
    image.referrerPolicy = "no-referrer";
    image.addEventListener("load", () => {
      frame.classList.add("has-image");
      caption.remove();
    });
    image.addEventListener("error", () => image.remove());
    image.src = game.image;
    frame.append(image);
  }
  frame.append(caption);
  return frame;
}

function category(game) {
  if (game.play || game.local) {
    const hasSource = hasOriginalSource(game);
    return hasSource && reusable.has(game.license) && !game.partialLicense ? "open" : "play-only";
  }
  return "play-only";
}

function card(game, index) {
  const repoUrl = game.repoUrl || (game.repo ? "https://github.com/" + game.repo : "");
  const owner = game.repo?.split("/")[0];
  const handle = game.author || owner;
  const authorUrl = game.authorUrl || (owner && !game.author ? "https://github.com/" + owner : "");
  const author = authorUrl ? link("@" + handle, authorUrl) : element("span", "", handle ? "@" + handle : "作者待核");
  author.className = "author";
  author.title = game.author ? "作品作者" : owner ? "GitHub 发布账号" : "";
  const article = element("article", "card");
  const content = element("div", "content");
  const meta = element("div", "meta");
  const status = category(game);
  const statusText = status === "open" ? "完整开源" : "可玩";
  meta.append(element("span", "badge " + status, statusText));
  const title = element("h3", "", game.name);
  if (game.url && !game.play && !game.local && !repoUrl) {
    title.replaceChildren(link(game.name, game.url));
  }
  content.append(meta, title, author);
  const source = element("p", "source", sourceLabels[game.source]);
  const licenseText = game.licenseLabel || (game.license
    ? game.license + (game.partialLicense ? " · 仅原创部分" : "")
    : "许可证未声明");
  source.append(element("span", "license-chip", licenseText));
  content.append(source);
  if (game.note) content.append(element("p", "note", game.note));

  const actions = element("div", "actions");
  const playUrl = game.play || (game.local && (game.url || (repoUrl && repoUrl + "#readme")));
  const play = playUrl ? link("试玩", playUrl) : null;
  if (play) {
    play.className = "pill play";
    if (!game.play) play.title = game.local;
    actions.append(play);
  }
  if (hasOriginalSource(game)) {
    const repository = link("原仓库", repoUrl);
    repository.className = "pill repository";
    actions.append(repository);
  }
  if (play) playCounter?.attach(play, actions, game);
  article.append(cover(game, index), content, actions);
  return article;
}

function hasOriginalSource(game) {
  return !game.sourceMirror && Boolean(game.repo || game.repoUrl) &&
    (game.source === "project" || game.source === "single");
}

const catalog = [...games].sort((left, right) =>
  (left.reviewOrder ?? Infinity) - (right.reviewOrder ?? Infinity) ||
  Number(hasOriginalSource(right)) - Number(hasOriginalSource(left)) ||
  (right.quality ?? 0) - (left.quality ?? 0));
const cards = catalog.map(card);
list.append(...cards);
playCounter?.load();

function update() {
  const term = search.value.normalize("NFKC").trim().toLowerCase();
  const scope = filter.value;
  let shown = 0;
  catalog.forEach((game, index) => {
    const owner = game.repo?.split("/")[0];
    const matches = [game.name, game.repo || game.repoUrl, game.url, game.genre, game.license, "@" + (game.author || owner || "")].join(" ").normalize("NFKC").toLowerCase().includes(term);
    const includes = scope === "all" || scope === category(game);
    cards[index].hidden = !(matches && includes);
    if (!cards[index].hidden) shown += 1;
  });
  count.textContent = term || scope !== "all" ? `筛选出 ${shown} 个游戏` : `共 ${games.length} 个游戏`;
  return shown;
}

search.addEventListener("input", update);
search.addEventListener("compositionend", update);
filter.addEventListener("change", update);
update();

const licenseDialog = document.querySelector("#license");
const licenseButton = document.querySelector("#open-license");
licenseButton.addEventListener("click", () => licenseDialog.showModal());

function renderReferences() {
  const sites = new Map();
  for (const game of games) {
    const repository = game.repoUrl || (game.repo && "https://github.com/" + game.repo);
    for (const [value, label] of [
      [game.imageSource, "画面出处"], [game.play, "试玩"], [repository, "仓库"],
      [game.url, "项目页面"], [game.authorUrl, "作者"], [game.remixes, "衍生版本"],
      [game.image, "原始画面文件"], [game.demo, "演示来源"],
      ...(game.refs || []).map(([label, value]) => [value, label]),
    ]) {
      if (!value?.startsWith("https://")) continue;
      const url = new URL(value);
      const host = url.hostname.replace(/^www\./, "");
      if (!sites.has(host)) sites.set(host, new Map());
      const links = sites.get(host);
      if (!links.has(url.href)) links.set(url.href, {names: new Set(), labels: new Set()});
      const reference = links.get(url.href);
      reference.names.add(game.name);
      reference.labels.add(label);
    }
  }

  const list = document.querySelector("#reference-sites");
  for (const [host, links] of [...sites].sort(([a], [b]) => a.localeCompare(b))) {
    const site = element("details", "");
    const entries = element("ul", "reference-links");
    site.append(element("summary", "", `${host}（${links.size}）`), entries);
    for (const [url, reference] of links) {
      const entry = element("li", "");
      const names = [...reference.names].join("、");
      const labels = [...reference.labels].join("、");
      entry.append(link(`${names} · ${labels}`, url));
      entries.append(entry);
    }
    const item = element("li", "");
    item.append(site);
    list.append(item);
  }
}

document.querySelector(".source-references").addEventListener("toggle", function () {
  if (this.open && !document.querySelector("#reference-sites").childElementCount) renderReferences();
});

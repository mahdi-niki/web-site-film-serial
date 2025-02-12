import { selectUnit, createElement,footer } from "./utils.js";
footer();
const container = selectUnit(".movie");
const container2 = selectUnit(".Serial");
const container3=selectUnit(".animations")

function initializeCarousel(containerSelector) {
  const container = selectUnit(containerSelector);
  const prevBtn = container.previousElementSibling;
  const nextBtn = container.nextElementSibling;

  const scrollAmount = 300;

  prevBtn.addEventListener("click", () => {
    container.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  nextBtn.addEventListener("click", () => {
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
}
// ------------------------movie & serial---------------------
async function movies() {
  try {
    const res = await fetch("./data/movie.json");
    const data = await res.json();
    data.forEach((movie) => {
      if (movie.type === "movie") {
        createCard(movie);
      } else if (movie.type === "tv") {
        createCard2(movie);
      }
    });
  } catch (error) {
    console.log(`error :${error}`);
  }
}

function createCard(movie) {
  const card = createElement("article", { class: "card" });

  const link = createElement("a", {
    href: `./page/movie.html?id=${movie.id}`,
    class: "card-link",
  });

  const imgContainer = createElement("div", { class: "image-container" });
  const img = createElement("img", {
    src: movie.image_url,
    alt: movie.title,
    loading: "lazy",
  });

  const name = createElement("p", {}, movie.title);

  imgContainer.append(img);
  link.append(imgContainer, name);
  card.append(link);

  const overlay = createElement("div", { class: "card-overlay" });
  const playBtn = createElement("span", { class: "play-icon" }, "▶");
  overlay.append(playBtn);
  card.append(overlay);

  container.append(card);
}

function createCard2(movie) {
  const card = createElement("article", { class: "card" });

  const link = createElement("a", {
    href: `./page/movie.html?id=${movie.id}`,
    class: "card-link",
  });

  const imgContainer = createElement("div", { class: "image-container" });
  const img = createElement("img", {
    src: movie.image_url,
    alt: movie.title,
    loading: "lazy",
  });

  const name = createElement("p", {}, movie.title);

  imgContainer.append(img);
  link.append(imgContainer, name);
  card.append(link);

  const overlay = createElement("div", { class: "card-overlay" });
  const playBtn = createElement("span", { class: "play-icon" }, "▶");
  overlay.append(playBtn);
  card.append(overlay);

  container2.append(card);
}

movies().then(() => {
  initializeCarousel(".movie");
  initializeCarousel(".Serial");
});

// ---------------------------------------animations--------------------------------
async function animations() {
  try {
    const res = await fetch("./data/anim.json");
    const data = await res.json();
    data.forEach((anime) => {
      createCard3(anime);
    });
  } catch (error) {
    console.log(`error :${error}`);
  }
}
animations().then(() => {
  initializeCarousel(".animations");
});

function createCard3(animation) {
  const card = createElement("article", { class: "card" });

  const link = createElement("a", {
    href: `./page/movie.html?id=${animation.id}`,
    class: "card-link",
  });

  const imgContainer = createElement("div", { class: "image-container" });
  const img = createElement("img", {
    src: animation.image_url,
    alt: animation.title,
    loading: "lazy",
  });

  const name = createElement("p", {}, animation.title);

  imgContainer.append(img);
  link.append(imgContainer, name);
  card.append(link);

  const overlay = createElement("div", { class: "card-overlay" });
  const playBtn = createElement("span", { class: "play-icon" }, "▶");
  overlay.append(playBtn);
  card.append(overlay);

  container3.append(card);
}


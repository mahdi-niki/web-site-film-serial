function selectUnit(selector, all = false) {
  return all
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);
}

function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
  
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  

    if (typeof children === 'string') {
      element.textContent = children;
    } else if (Array.isArray(children)) {
      children.forEach(child => {
        if (typeof child === 'string') {
          element.appendChild(document.createTextNode(child));
        } else if (child instanceof HTMLElement) {
          element.appendChild(child);
        }
      });
    }
  
    return element;
  }



// ------------------------------ Footer -------------------------------
function footer() {
const footer = selectUnit(".footer");

footer.style.display = "flex";
footer.style.justifyContent = "space-around";
footer.style.alignItems = "center";
footer.style.padding = "20px";
footer.style.backgroundColor = "#1a1a1a";
footer.style.color = "#fff";
footer.style.flexWrap = "wrap";

const links = createElement("div", { class: "links" });
const ul = createElement("ul");
ul.style.listStyle = "none";
ul.style.padding = "0";

const createNavLink = (text, url) => {
  const li = createElement("li", { class: "link" }, text);
  li.style.margin = "10px 0";
  li.style.cursor = "pointer";
  li.style.color = "rgb(151, 92, 92)";
  li.addEventListener("click", () => {
    window.location.href = url;
  });
  return li;
};

ul.append(
  createNavLink("Home", "#"),
  createNavLink("About us", "#"),
  createNavLink("Contact", "#")
);

links.append(ul);
footer.append(links);

const description = createElement("div");
description.style.width = "250px";
description.style.textAlign = "center";
description.innerText =
  "If you want full access to the site to watch all the cool movies, you must become a member of our site.";
footer.append(description);

const ul2 = createElement("ul");
ul2.style.listStyle = "none";
ul2.style.padding = "0";
ul2.append(
  createNavLink("Privacy Policy", "#"),
  createNavLink("Terms of Service", "#"),
  createNavLink("Cookie Policy", "#")
);
footer.insertBefore(ul2, description);

const socialMedia = createElement("div");
socialMedia.style.width = "200px";
socialMedia.style.display = "flex";
socialMedia.style.justifyContent = "space-around";
socialMedia.style.marginTop = "20px";

const createSocialIcon = (iconClass, url) => {
  const icon = createElement("i", { class: iconClass });
  icon.style.fontSize = "24px";
  icon.style.color = "#fff";
  icon.style.cursor = "pointer";
  icon.addEventListener("click", () => {
    window.open(url, "_blank");
  });
  icon.addEventListener("mouseenter", () => {
    icon.style.color = "#e50914";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.color = "#fff";
  });
  return icon;
};

socialMedia.append(
  createSocialIcon("fab fa-instagram", "https://www.instagram.com/"),
  createSocialIcon("fab fa-facebook", "https://www.facebook.com/"),
  createSocialIcon("fab fa-twitter", "https://twitter.com/")
);

footer.append(socialMedia);
}

export { selectUnit,createElement,footer };




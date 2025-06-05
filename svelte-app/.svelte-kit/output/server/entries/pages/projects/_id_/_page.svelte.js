import { W as getContext, Y as store_get, T as stringify, Z as unsubscribe_stores, S as pop, P as push } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
import { a as allItems } from "../../../../chunks/galleryData.js";
import { b as base } from "../../../../chunks/paths.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import { a as attr } from "../../../../chunks/attributes.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let id, item, images;
  let currentImageIndex = 0;
  id = store_get($$store_subs ??= {}, "$page", page).params.id;
  item = allItems.find((i) => String(i.id) === String(id));
  images = item ? [
    item.image,
    item.image2,
    item.image3,
    item.image4,
    item.image5
  ].filter((img) => img) : [];
  console.log("ID from URL:", id);
  console.log("Found item:", item);
  console.log("Available images:", images);
  $$payload.out += `<div class="item-details svelte-1vq8m7">`;
  if (item) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h1 class="svelte-1vq8m7">${escape_html(item.title)}</h1> <div class="carousel svelte-1vq8m7">`;
    if (images.length > 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="carousel-container svelte-1vq8m7"><img class="carousel-image svelte-1vq8m7"${attr("src", `${stringify(base)}${stringify(images[currentImageIndex])}`)}${attr("alt", `${item.title} - Image ${currentImageIndex + 1}`)}> <div class="image-counter svelte-1vq8m7">${escape_html(currentImageIndex + 1)} / ${escape_html(images.length)}</div> `;
      if (images.length > 1) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<button class="carousel-btn prev-btn svelte-1vq8m7"><span>←</span></button> <button class="carousel-btn next-btn svelte-1vq8m7"><span>→</span></button>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div> <div class="content svelte-1vq8m7"><p class="description svelte-1vq8m7">${escape_html(item.content)}<br><br><b>Description:</b> ${escape_html(item.description)}</p> `;
    if (item.software) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p class="svelte-1vq8m7"><b>Software:</b> ${escape_html(item.software)}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (item.style) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p class="svelte-1vq8m7"><b>Style:</b> ${escape_html(item.style)}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (item.date) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p class="svelte-1vq8m7"><b>Date:</b> ${escape_html(item.date)}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (item.link) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p class="svelte-1vq8m7"><a${attr("href", item.link)} target="_blank" rel="noopener noreferrer"><b>Game Link</b></a></p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="not-found svelte-1vq8m7"><h1 class="svelte-1vq8m7">Item Not Found</h1> <p class="svelte-1vq8m7">The item you are looking for does not exist.</p></div>`;
  }
  $$payload.out += `<!--]--></div> <a${attr("href", `${stringify(base)}/`)} class="back-arrow svelte-1vq8m7" aria-label="Return to homepage"><span class="arrow svelte-1vq8m7">←</span> Back to Gallery</a>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};

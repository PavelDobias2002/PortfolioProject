import { X as ensure_array_like, T as stringify, S as pop, P as push } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { a as allItems } from "../../chunks/galleryData.js";
import { a as attr, t as to_class, c as clsx } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/escaping.js";
function Gallery($$payload, $$props) {
  push();
  let items = [...allItems];
  let activeCategory = "All";
  const each_array = ensure_array_like(items);
  $$payload.out += `<div class="category-filters svelte-c2v0nt"><button${attr("class", to_class(clsx("active"), "svelte-c2v0nt"))}>All</button> <button${attr("class", to_class(clsx(""), "svelte-c2v0nt"))}>Game Development</button> <button${attr("class", to_class(clsx(""), "svelte-c2v0nt"))}>Digital Art</button> <button${attr("class", to_class(clsx(""), "svelte-c2v0nt"))}>Animation</button> <button${attr("class", to_class(clsx(""), "svelte-c2v0nt"))}>Traditional Art</button></div> <div id="gallery" class="svelte-c2v0nt">`;
  if (items.length === 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="no-items-message svelte-c2v0nt"><p>No items found in the "${escape_html(activeCategory)}" category.</p></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<div class="specific-item svelte-c2v0nt"><div class="image svelte-c2v0nt"><a${attr("href", `${base}/projects/${item.id}`)}><img${attr("src", `${stringify(base)}${stringify(item.image)}`)}${attr("alt", item.title)} class="svelte-c2v0nt"></a></div> <div class="content svelte-c2v0nt"><a${attr("href", `${base}/projects/${item.id}`)}><h3 class="item-heading svelte-c2v0nt">${escape_html(item.title)}</h3></a> <p>${escape_html(item.content)}</p></div> <div class="info svelte-c2v0nt"><p><b>Software/Tools:</b> ${escape_html(item.software)}</p> <p><b>Style:</b> ${escape_html(item.style)}</p> <p><b>Date:</b> ${escape_html(item.date)}</p></div></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="section-header svelte-l6wu63"><div class="logo svelte-l6wu63"><img${attr("src", `${stringify(base)}/logoRed-Black.png`)} alt="Logo" class="svelte-l6wu63"></div> <h1 class="svelte-l6wu63">Welcome to my portfolio gallery</h1> <p class="svelte-l6wu63">My name is <b class="svelte-l6wu63">Pavel Dobias</b>, I am an artist, designer, game designer/developer looking to learn new things.<br class="svelte-l6wu63"> And to learn more about me check out my <b class="svelte-l6wu63">contacts:</b><br class="svelte-l6wu63"> <b class="svelte-l6wu63">Email:</b> dobias.parez@gmail.com <br class="svelte-l6wu63"> <b class="svelte-l6wu63">Phone:</b> +420 724 259 929/+353 87 487 8524</p></div> <ul class="svelte-l6wu63"><li class="svelte-l6wu63"><a${attr("href", `${stringify(base)}/CV`)} class="svelte-l6wu63"><img${attr("src", `${stringify(base)}/cvredbrightsmaller.png`)} alt="CVicon" class="svelte-l6wu63"></a></li> <li class="svelte-l6wu63"><a href="https://github.com/PavelDobias2002" target="_blank" rel="noopener noreferrer" class="svelte-l6wu63"><img${attr("src", `${stringify(base)}/github-logo-logo.webp`)} alt="GitHubIcon" class="svelte-l6wu63"></a></li> <li class="svelte-l6wu63"><a href="https://www.linkedin.com/in/pavel-dobias-789060292/" target="_blank" rel="noopener noreferrer" class="svelte-l6wu63"><img${attr("src", `${stringify(base)}/LinkedInLogo.webp`)} alt="LinkedInIcon" class="svelte-l6wu63"></a></li> <li class="svelte-l6wu63"><a href="https://codeberg.org/PavelDobias" target="_blank" rel="noopener noreferrer" class="svelte-l6wu63"><img${attr("src", `${stringify(base)}/codeberglogo.webp`)} alt="CodebergIcon" class="svelte-l6wu63"></a></li></ul> <div class="scroll-arrow-container svelte-l6wu63"><div class="scroll-arrow svelte-l6wu63"><span class="svelte-l6wu63">Scroll Down</span> ↓</div></div> `;
  Gallery($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};

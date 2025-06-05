import { T as stringify, V as slot } from "../../chunks/index.js";
import "clsx";
import { b as base } from "../../chunks/paths.js";
import { a as attr } from "../../chunks/attributes.js";
function Header($$payload) {
  $$payload.out += `<header class="svelte-n77hc">`;
  Navigation($$payload);
  $$payload.out += `<!----></header>`;
}
function Navigation($$payload) {
  $$payload.out += `<nav class="nav svelte-6lhn95"><ul class="svelte-6lhn95"><li class="svelte-6lhn95"><a${attr("href", `${stringify(base)}/`)} data-text="Home" class="svelte-6lhn95">Home</a></li> <li class="svelte-6lhn95">| Be kind to each other</li></ul></nav>`;
}
function Footer($$payload) {
  $$payload.out += `<footer class="svelte-1dy120d"><p>© 2025 My Svelte App. All rights reserved. Pavel Dobias Portfolio</p></footer>`;
}
function _layout($$payload, $$props) {
  $$payload.out += `<link rel="stylesheet"${attr("href", `${stringify(base)}/styles/global.css`)} class="svelte-2x201g"> `;
  Header($$payload);
  $$payload.out += `<!----> <main class="svelte-2x201g"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};

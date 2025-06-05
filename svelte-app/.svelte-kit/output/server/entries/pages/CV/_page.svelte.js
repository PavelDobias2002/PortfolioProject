import { T as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload) {
  $$payload.out += `<h1 class="svelte-100beyd">My CV</h1> <embed${attr("src", `${stringify(base)}/CV-Pavel-Dobias.pdf`)} width="100%" height="600px" type="application/pdf"> <a${attr("href", `${stringify(base)}/CV-Pavel-Dobias.pdf`)} target="_blank" rel="noopener noreferrer" class="svelte-100beyd">Download My PDF</a>`;
}
export {
  _page as default
};

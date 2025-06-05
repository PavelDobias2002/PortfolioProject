import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.7XBCsSK-.js","_app/immutable/chunks/NNretG6S.js","_app/immutable/chunks/DtEJNvtw.js","_app/immutable/chunks/DMsIFpxt.js","_app/immutable/chunks/jjX37BSy.js","_app/immutable/chunks/dQttWJvi.js"];
export const stylesheets = ["_app/immutable/assets/0.B6QIwA5g.css"];
export const fonts = [];

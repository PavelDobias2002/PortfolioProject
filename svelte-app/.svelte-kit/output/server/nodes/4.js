import * as server from '../entries/pages/projects/_id_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.BHy6JCRu.js","_app/immutable/chunks/NNretG6S.js","_app/immutable/chunks/DtEJNvtw.js","_app/immutable/chunks/DMsIFpxt.js","_app/immutable/chunks/tph--4ow.js","_app/immutable/chunks/BPYFrqjZ.js","_app/immutable/chunks/jjX37BSy.js","_app/immutable/chunks/Bd4hYk7h.js","_app/immutable/chunks/Hk6mNqmx.js","_app/immutable/chunks/CRK1Z7GY.js","_app/immutable/chunks/CsSk14_Q.js","_app/immutable/chunks/dQttWJvi.js","_app/immutable/chunks/B4mFDZUo.js","_app/immutable/chunks/FTS0uDP7.js"];
export const stylesheets = ["_app/immutable/assets/4.BvF4hJ-3.css"];
export const fonts = [];

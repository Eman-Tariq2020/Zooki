
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Zooki/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5521, hash: 'f525f2a55a7062a446547e3084b3b98a14ab6d9722e17ab0fcd6d6318da9e40b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1163, hash: 'd517e49cb42287c0ea71e08cf1ba489ddb1fa0c72bd203b491b6e10bbcc8e6ff', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WAAKCHGR.css': {size: 305079, hash: 'KgUj/5es9lQ', text: () => import('./assets-chunks/styles-WAAKCHGR_css.mjs').then(m => m.default)}
  },
};


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Zooki/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5522, hash: 'ebc765c82fa5d37f829d391c05a3531ea4838b2542defe27ce435b1ee8f77e4e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1164, hash: '020dde64c32e3353f9de4f61b90d0120a05d37b02a244346e42b5db0df35677f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WAAKCHGR.css': {size: 305079, hash: 'KgUj/5es9lQ', text: () => import('./assets-chunks/styles-WAAKCHGR_css.mjs').then(m => m.default)}
  },
};

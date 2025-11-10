
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Zooki/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5521, hash: 'dfd59575c7b0097e1181014eaf7b74abc72711e1bc173e0cfe2d278f74dfb362', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1163, hash: '3412c5408efa8891d7f951e858e1a5fd37cfcdaad04711a0b2c1fd8b96f90a33', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WAAKCHGR.css': {size: 305079, hash: 'KgUj/5es9lQ', text: () => import('./assets-chunks/styles-WAAKCHGR_css.mjs').then(m => m.default)}
  },
};

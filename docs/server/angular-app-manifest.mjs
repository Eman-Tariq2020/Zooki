
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5515, hash: '90a256275a280429119bdd5e5b52db025ccecef5945cf05c004e739035341bba', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1157, hash: '1b167f26c42b324ae6891776cb29bbb7edd2392c5c7589a57ad2788d3d9379e7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WAAKCHGR.css': {size: 305079, hash: 'KgUj/5es9lQ', text: () => import('./assets-chunks/styles-WAAKCHGR_css.mjs').then(m => m.default)}
  },
};

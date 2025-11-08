
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Zooki/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5522, hash: '257434178ac3d7fa2b130bca05fed2f24c8f725e4279f8e8787da5bfaa515c68', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1164, hash: '559ba240d32dbc78930c36f125b33f8d73f9dcd896426bb4cdba5ec2c2c8d5bc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WAAKCHGR.css': {size: 305079, hash: 'KgUj/5es9lQ', text: () => import('./assets-chunks/styles-WAAKCHGR_css.mjs').then(m => m.default)}
  },
};

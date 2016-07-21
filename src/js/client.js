// Detect if this is a child frame. If yes, initialize the react devtools hook to work around
//   https://github.com/facebook/react-devtools/issues/57
// This must occur before any react code is loaded.
if (window.parent !== window) {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__;
}

require('../sass/style.scss');

// Get our browser up to date with polyfills.
// TODO(awong): These do NOT correctly conditionally load the polyfill.
// The polyfill is always loaded. require.ensure() should be used instead but
// then load ordering needs to be worked out. Fix later.
const Modernizr = require('modernizr');
if (!Modernizr.classlist) {
  require('classlist-polyfill'); // DOM element classList support.
}
if (!Modernizr.dataset) {
  require('dataset');  // dataSet accessor support.
}

// This polyfill has its own test logic so no need to conditionally require.
require('polyfill-function-prototype-bind');

// Bring in foundation and custom libraries.
require('foundation-sites');
require('./legacy/components.js');

// Only used in facility-locator index and some playbook examples.
require('jquery-accessible-simple-tooltip-aria/jquery-accessible-simple-tooltip-aria.js');
require('./legacy/menu.js');
require('./legacy/toggle-veterans-crisis-line.js');

// TODO(awong): Change this entry to something with a global router.
if (window.location.pathname.startsWith('/rx/')) {
  const ReactEntry = require('./rx/roadrunner-entry.jsx');
  // eslint-disable-next-line scanjs-rules/call_addEventListener
  document.addEventListener('DOMContentLoaded', () => {
    ReactEntry.init();
  });
}

require('wowjs');
/* global WOW */
new WOW().init();
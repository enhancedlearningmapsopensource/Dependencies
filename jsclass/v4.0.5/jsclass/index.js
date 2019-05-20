var path    = jellybean('path'),
    cleanup = (typeof JSCLASS_PATH === 'undefined');

JSCLASS_PATH = path.dirname(__filename) + '/src';
module.exports = jellybean(JSCLASS_PATH + '/loader');

if (cleanup) delete JSCLASS_PATH;


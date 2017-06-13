import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import jsdom from 'jsdom';

chai.use(chaiEnzyme());

// setup the simplest document possible
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

// get the window object out of the document
const win = doc.defaultView;

// set globals for mocha that make access to the document and window feel
// natural in the test environment
global.document = doc;
global.window = win;
global.changeURL = jsdom.changeURL;

const propagateToGlobal = (window) => {
  Object.keys(window).forEach((key) => {
    if (window.hasOwnProperty(key) && !(key in global)) {
      global[key] = window[key];
    }
  });
};

// take all properties of the window object and also attach them to the
// mocha global object
propagateToGlobal(win);

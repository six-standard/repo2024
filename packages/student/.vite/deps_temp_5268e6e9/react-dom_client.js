import {
  require_react_dom
} from "./chunk-DASPJU2D.js";
import "./chunk-ZK6F47AF.js";
import {
  __commonJS
} from "./chunk-WOOG5QLI.js";

// ../../.yarn/__virtual__/react-dom-virtual-d3e0772335/0/cache/react-dom-npm-18.3.1-a805663f38-a752496c19.zip/node_modules/react-dom/client.js
var require_client = __commonJS({
  "../../.yarn/__virtual__/react-dom-virtual-d3e0772335/0/cache/react-dom-npm-18.3.1-a805663f38-a752496c19.zip/node_modules/react-dom/client.js"(exports) {
    var m = require_react_dom();
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});
export default require_client();
//# sourceMappingURL=react-dom_client.js.map

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  //  </React.StrictMode>
);

/* 
Strict mode can’t automatically detect side effects for you, but it can help you spot them by making them a little more deterministic. This is done by intentionally double-invoking the following functions:

1. Class component constructor, render, and shouldComponentUpdate methods
2. Class component static getDerivedStateFromProps method
3. Function component bodies
4. State updater functions (the first argument to setState)
5. Functions passed to useState, useMemo, or useReducer 

If you remove the StrictMode element from index.js, you'll see the output only gets logged once

Note: Strict mode checks are run in development mode only; they do not impact the production build.
*/

import '@greycat/web';
// Since 8.1 the package root only exports the component *classes*; the
// `customElements.define` calls live in the per-component `register.js`
// modules that `components/all.js` pulls in. Without this import every
// `<gui-*>` stays unregistered and `new GuiTable()` throws "Illegal constructor".
import '@greycat/web/components/table';
import '@greycat/web/components/select';
import '@greycat/web/components/value';
import '@greycat/web/components/chart';
import '@greycat/web/components/map';
import '@greycat/web/components/inputs';
import '@greycat/web/components/factory';
import '@greycat/web/greycat.css';
import './index.css';
import './components/mengplaz-layout/mengplaz-layout';
// initialize GreyCat SDK

console.log(import.meta.env.VITE_ENV);

await gc.sdk.init({ debug: import.meta.env.VITE_ENV === "dev" });

document.body.replaceChildren(<mengplaz-layout />);

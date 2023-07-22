import "./style.css";
import "./src/index.js";
import BreezeRouter from "breeze-router";

const ROUTER = new BreezeRouter();

ROUTER.add('/', async ({ route, params }) => {
  const { default: home } = await import("./src/routes/Home.js").catch(console.error);
  BREEZE_APP.content = `<breeze-home></breeze-home>`;
})

ROUTER.add('/signup', async ({ route, params }) => {
  const { default: signup } = await import("./src/routes/Signup.js").catch(console.error);
  console.dir(signup);
  BREEZE_APP.content = `<breeze-signup></breeze-signup>`;
  // https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/getName
  // not supported yet
  // console.log(customElements.getName(signup));
})

ROUTER.add('404', () => {
  alert('page not found');
  ROUTER.redirect('/');
})

ROUTER.start();
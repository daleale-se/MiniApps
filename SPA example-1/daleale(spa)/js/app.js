const loadScript = async (scriptPath) => {
  const existingScript = document.getElementById("view-script");
  if (existingScript) {
    existingScript.remove();
  }
  const script = document.createElement("script");
  script.src = scriptPath;
  script.id = "view-script";  // Give the script an ID so we can remove it later
  script.type = "module"; // or "text/javascript" depending on your setup
  script.async = true;
  document.body.appendChild(script);

  try {
    // Use dynamic import to load the module and call init() from it
    const module = await import(`./${scriptPath}`);
    if (typeof module.init === "function") {
      module.init(); // Call the init function defined in the JS file
    } else {
      console.error("init() function not found in " + scriptPath);
    }
  } catch (error) {
    console.error("Error loading module: ", error);
  }
};

const route = (event) => {
  event = event || window.event
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: {html: "404.html", js: null},
  "/": {html: "home.html", js: "../js/home.js"},
  "/home": {html: "home.html", js: "../js/home.js"},
  "/posts": {html: "posts.html", js: "../js/posts.js"},
};

const handleLocation = async () => {
  // const path = window.location.pathname;
  const path = window.location.pathname.replace("/SPA%20example-1/daleale(spa)/views", "");
  const route = routes[path] || routes[404];
  const html = await fetch(route.html).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
  if (route.js) {
    await loadScript(route.js)
  }
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

// when i reload the page or write a new direction the url, you going to get a CANNOT GET error
// we can fixed it changing some parameters but our server (live server) not only work with 
// with other project

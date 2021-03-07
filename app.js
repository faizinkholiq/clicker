const connect = require("connect");
const serveStatic = require("serve-static");
const port = 8080;

connect()
  .use(serveStatic(__dirname))
  .listen(port, () =>
    console.log(
      "🎉  Static file server running at http://localhost:" +
        port +
        "\n[CTRL + C to shutdown]"
    )
  );

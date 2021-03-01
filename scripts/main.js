let num = 0;

window.onload = async () => {
  if ("serviceWorker" in navigator) {
    try {
      let sw = await navigator.serviceWorker.register("serviceWorker.js", {
        scope: "/clicker/"
      });
      console.log(
        "Service worker registration successfull with scope ",
        sw.scope
      );
    } catch (err) {
      console.log("Service worker registration failed:", err);
    }
    navigator.serviceWorker.addEventListener("message", event => {
      num = event.data.value;
      increasePoint(num);
    });
  }
};

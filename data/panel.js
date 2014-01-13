var hasDebugger = false;
self.port.on("show", () => {
    if (!hasDebugger) {
        hasDebugger = true;
        debugger;
    }
    console.log("show!");
});
document.getElementById("config-button").addEventListener("click", () => {
    console.log("Showing config page");
    self.port.emit("config");
});

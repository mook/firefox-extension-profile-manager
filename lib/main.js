const {data} = require("sdk/self");
const subprocess = require("subprocess");
const {Panel} = require("sdk/panel");
const {Widget} = require("sdk/widget");

var gWidget = Widget({
    label: "Profiles",
    id: "profileman-" + Date.now() + Math.random(),
    contentURL: data.url("images/user-silhouette.png"),
    panel: Panel({
        contentURL: data.url("panel.html"),
        contentScriptFile: data.url("panel.js"),
        contentScriptWhen: "ready"
    })
});

gWidget.panel.on("show", () => gWidget.panel.port.emit("show"));
gWidget.panel.port.on("config", () => {
    console.log("on config");
    require("sdk/tabs").open(data.url("config.html"));
});
gWidget.panel.port.on("launch", (profileId) => {

});

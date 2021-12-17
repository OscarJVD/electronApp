const { app, BrowserWindow } = require("electron");
const path = require("path");
// const url = require("url")

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    fullscreen: true,
    // kiosk: true,
    autoHideMenuBar:true,
    // skipTaskbar: true,
    // width: 800, height: 600,
    // icon: "media/img/icon.png",
  });

  // and load the index.html of the app.
  win.loadURL(path.join(__dirname, "index.html"));
}

app.on("ready", createWindow);

import { app, BrowserWindow, screen, shell } from 'electron';
import installExtension, { VUEJS_DEVTOOLS } from "electron-devtools-assembler";
import path from 'path';
import process from "process";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 920,
    height: 680,
    minWidth: 920,
    minHeight: 680,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true
    },
    autoHideMenuBar: true,
    icon: "./assets/ryujinx_logo.png" // todo: verify if this works correctly
  });

  const displays = screen.getAllDisplays();
  const display = displays.find((d) => d.bounds.x !== 0 || d.bounds.y !== 0) || displays[0];
  mainWindow.setSize(Math.min(display.bounds.width, 1280), Math.min(display.bounds.width, 860));

  // and load the index.html of the app.
  // @ts-ignore
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    // @ts-ignore
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    // @ts-ignore
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // focus this instance if someone tries to start a new one
  app.on('second-instance', (event, commandLine, workingDirectory, additionalData) => {
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  })
};

// Prevent running multiple instances
if (!app.requestSingleInstanceLock({ myKey: "RyuSAK-Redux" })) {
  app.quit();
  console.log("Another instance is already running. Bye!")
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow();
  
  // Install Vue Devtools
  installExtension(VUEJS_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
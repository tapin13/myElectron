const electron = require('electron');

const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    let win = new BrowserWindow({ width: 800, height: 600});

    win.loadFile('index.html');
}

app.on('ready', createWindow);
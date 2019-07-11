const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;

app.on('ready', function () {
    mainWindow = new BrowserWindow({});

   // mainWindow.webContents.openDevTools();

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file',
        slashes: true
    }));

    mainWindow.on('closed', function () {
        app.quit();
    });

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

const mainMenuTemplate = [
    {
        label: 'Opcje',
        submenu: [
            {
                label: 'Zamknij program',
                accelerator: process.platform == 'darwin' ? 'command+q' : 'Ctrl+q',
                click() {
                    app.quit();
                }
            }
        ]
    }
];



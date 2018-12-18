const Main = imports.ui.main;

function enable() {
    _tray().hide();
}

function disable() {
    _tray().show();
}

/**
 * @returns the UI tray object
 */
function _tray() {
    return Main.legacyTray._slider;
}

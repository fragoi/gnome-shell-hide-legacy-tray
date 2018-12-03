const Main = imports.ui.main;

function enable() {
	Main.legacyTray.actor.set_opacity(0);
}

function disable() {
	Main.legacyTray.actor.set_opacity(255);
}

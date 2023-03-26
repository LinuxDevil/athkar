import * as vscode from 'vscode';
import { showAthkar } from './islamic-athkar';
let interval: NodeJS.Timeout;

export function activate(context: vscode.ExtensionContext) {

	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('athkar.helloWorld', () => {
		interval = setInterval(showAthkar, 60000);
		vscode.window.showInformationMessage('Athkar will show now every 1 hour!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {
	clearInterval(interval);
}

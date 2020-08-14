#!/usr/bin/env node
const program = require('commander');
// @ts-ignore
const packageInfo = require('../package.json');
const detectIsOnGlitch = require('./index');
global.G_CALLED_FROM_CLI = true;

program.version(packageInfo.version).option('-i, --invert', 'invert the boolean result (get 0 for NOT being on glitch)');

const cli = async () => {
	program.parse(process.argv);
	const isOnGlitch = await detectIsOnGlitch();

	// Remember: code 0 is used for *success*
	let exitCode = isOnGlitch ? 0 : 1;

	// Allow for inversion of exit code for easier use
	if (program.invert) {
		exitCode = exitCode ? 0 : 1;
	}
	process.exit(exitCode);
};

cli();

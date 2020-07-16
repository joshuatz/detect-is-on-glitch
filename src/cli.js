const detectIsOnGlitch = require('./index');
globalThis.G_CALLED_FROM_CLI = true;

const cli = async () => {
	const isOnGlitch = await detectIsOnGlitch();
	return isOnGlitch ? 1 : 0;
};

cli();

const { nodeDetector } = require('./node');
const { browserDector } = require('./browser');

async function detectIsOnGlitch() {
	if (!process.browser || global.G_CALLED_FROM_CLI) {
		return await nodeDetector();
	}

	return await browserDector();
}

module.exports = detectIsOnGlitch;

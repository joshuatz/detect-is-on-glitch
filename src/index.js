const { nodeDetector } = require('./node');
const { browserDector } = require('./browser');

async function detectIsOnGlitch() {
	if (!process.browser) {
		return await nodeDetector();
	}

	return await browserDector();
}

module.exports = detectIsOnGlitch;

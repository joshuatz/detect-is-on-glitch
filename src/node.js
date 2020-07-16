const { envKeysArr } = require('./constants');

const nodeDetector = async () => {
	for (const envKey of envKeysArr) {
		const envVal = process.env[envKey.key];
		if (envVal && typeof envVal === 'string') {
			if (envKey.pattern) {
				return envKey.pattern.test(envVal);
			}

			return true;
		}
	}
};

module.exports = {
	nodeDetector
};

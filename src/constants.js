const envKeysArr = [
	{
		key: 'GLITCH_SHARED_INCLUDES_LEGACY_CLS'
	},
	{
		key: 'PROJECT_REMIX_CHAIN'
	},
	{
		key: 'PROJECT_INVITE_TOKEN'
	},
	{
		key: 'API_SERVER_EXTERNAL',
		pattern: /api\.glitch\./i
	}
];

const glitchDomainPattern = /.+\.glitch\.(?:me|com).*|.*glitch\.com.*/i;

module.exports = {
	envKeysArr,
	glitchDomainPattern
};

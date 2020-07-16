const { glitchDomainPattern } = require('./constants');

const browserDector = async () => {
	return glitchDomainPattern.test(document.location.href);
};

module.exports = {
	browserDector
};

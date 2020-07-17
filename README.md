# Detect-Is-On-Glitch

Creative name, right?

Well, in my defense, this is a very simple package. It simply tells you whether or not your code is executing inside of the Glitch environment.

## Using
Options:

 - Call via CLI
	 - `detect-is-on-glitch` or `isglitch`
		 - `isglitch && echo "Running on Glitch"`
	 - You can use the `-i` or `--invert` flag to get `!result`, like so:
		 - `isglitch -i && echo "Not running on Glitch"`
 - Pull in to front-end
	```html
	<script src="node_modules/detect-is-on-glitch/dist/detect-is-on-glitch.js"></script>
	<script>
	detectIsOnGlitch().then((res) => {
		alert(`You are ${res ? '' : 'not '}on Glitch`);
	});
	</script>
	```
 - Backend / NodeJS
	```js
	const getIsOnGlitch = require('detect-is-on-glitch');

	getIsOnGlitch().then((isOnGlitch) => {
		if (isOnGlitch) {
			console.log('is on glitch!');
		} else {
			console.log('somewhere else!');
		}
	});
	```

## Detection method
Right now, the detection method is extremely simple:
 - Browser / client: Checks if the current URL belongs to Glitch, or a subdomain
 - Server side: Checks for some `env` / `process.env.*` environmental variables that are injected by Glitch
	 - For example, `GLITCH_SHARED_INCLUDES_LEGACY_CLS`
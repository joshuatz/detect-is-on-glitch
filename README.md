# Detect-Is-On-Glitch

Creative name, right?

Well, in my defense, this is a very simple package. It simply tells you whether or not your code is executing inside of the Glitch environment.

## Detection method
Right now, the detection method is extremely simple:
 - Browser / client: Checks if the current URL belongs to Glitch, or a subdomain
 - Server side: Checks for some `env` / `process.env.*` environmental variables that are injected by Glitch
	 - For example, `GLITCH_SHARED_INCLUDES_LEGACY_CLS`
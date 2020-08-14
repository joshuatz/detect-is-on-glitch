declare namespace NodeJS {
	interface Process {
		browser?: boolean;
	}
	interface Global {
		G_CALLED_FROM_CLI?: boolean;
	}
}

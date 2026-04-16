declare global {
	namespace App {
		interface Locals {
			user: {
				id: string;
				email: string;
				role: 0 | 1;
			} | null;
		}
	}
}

export {};
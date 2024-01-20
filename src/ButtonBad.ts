export class ButtonBad {
	private text: string
	private callbacks = new Array<() => void>()

	constructor(text: string) {
		this.text = text
	}

	public get innerText(): string {
		return this.text
	}

	public onClick(callback: () => void): void {
		this.callbacks.push(callback)
	}

	public click(): void {
		// click logic ...
		this.callbacks.forEach((callback) => callback())
	}
}

// Problems with this class:
// 1. Coupling between Button and Listener
// 2. Hence, the listening logic is not reusable
// 3. No way to remove listeners
// 4. Duplicated listeners are possible

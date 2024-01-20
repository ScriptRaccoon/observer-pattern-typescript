import { Listener } from "./Listener"

export class Button {
	private text: string
	private clickListener = new Listener<void>()

	constructor(text: string) {
		this.text = text
	}

	public get innerText(): string {
		return this.text
	}

	public onClick(callback: () => void): () => void {
		return this.clickListener.add(callback)
	}

	public click(): void {
		// click logic ...
		this.clickListener.notify()
	}
}

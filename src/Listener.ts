/**
 * @class Listener
 * @description class to handle callbacks
 * @template T type of data to be passed to callbacks
 */
export class Listener<T> {
	/**
	 * @private
	 * @description set of callback functions
	 */
	private callbacks = new Set<(data: T) => void>()

	/**
	 * @param callback callback function to be called when notify is called
	 * @returns unsubscribe function
	 * @description adds callback to the set of callbacks and
	 * returns a function to remove the callback from the set
	 */
	public add(callback: (data: T) => void): () => void {
		this.callbacks.add(callback)
		return () => this.callbacks.delete(callback)
	}

	/**
	 * @param data data to be passed to callbacks
	 * @description executes all callbacks with the data passed
	 */
	public notify(data: T): void {
		this.callbacks.forEach((callback) => callback(data))
	}

	/**
	 * @description clears all callbacks
	 */
	public clear(): void {
		this.callbacks.clear()
	}
}

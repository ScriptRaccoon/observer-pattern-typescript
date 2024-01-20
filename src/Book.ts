import { Listener } from "./Listener"

/**
 * Book class
 */
export class Book {
	public numberPages: number

	constructor(
		public title: string,
		public author: string,
		public description: string,
		public pages: string[]
	) {
		this.numberPages = pages.length
	}
}

/**
 * Output interface
 */
interface Output {
	write: (str: string) => void
}

/**
 * BookReader class
 */
export class BookReader {
	private pageListener = new Listener<number>()
	private readListener = new Listener<void>()

	constructor(
		private book: Book,
		private output: Output,
		private currentPage: number = 0
	) {}

	public read(): void {
		if (this.book.pages.length === 0) return
		this.output.write(this.book.pages[this.currentPage])
		this.readListener.notify()
	}

	public incrementPage(): void {
		this.currentPage = Math.min(
			this.currentPage + 1,
			this.book.numberPages - 1
		)
		this.pageListener.notify(this.currentPage)
	}

	public decrementPage(): void {
		this.currentPage = Math.max(this.currentPage - 1, 0)
		this.pageListener.notify(this.currentPage)
	}

	public onPageChange(callback: (page: number) => void): () => void {
		return this.pageListener.add(callback)
	}

	public onRead(callback: () => void): () => void {
		return this.readListener.add(callback)
	}
}

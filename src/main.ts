import { Button } from "./Button"
import { ButtonBad } from "./ButtonBad"
import { Book, BookReader } from "./Book"

// BUTTON BAD EXAMPLE

const exampleButtonBad = new ButtonBad("Example Button Bad")

exampleButtonBad.onClick(() => {
	console.info("@@@ Button Bad clicked!")
})

exampleButtonBad.click()
exampleButtonBad.click()

// BUTTON EXAMPLE

const exampleButton = new Button("Example Button")

const removeClickListener = exampleButton.onClick(() => {
	console.info("@@@ Button clicked!")
})

exampleButton.click()
exampleButton.click()
removeClickListener()
exampleButton.click()

// BOOK EXAMPLE

const exampleBook = new Book(
	"Example Book Title",
	"Example Author",
	"Example Description",
	["Example Page 1", "Example Page 2", "Example Page 3"]
)

const bookReader = new BookReader(exampleBook, { write: console.log })

const removePageListener = bookReader.onPageChange((page) => {
	console.info(`@@@ Page changed to ${page}`)
})

bookReader.onPageChange((page) => {
	console.info(`@@@ Page ${page} is saved to history`)
})

bookReader.read()
bookReader.incrementPage()
bookReader.read()
bookReader.incrementPage()
bookReader.read()

removePageListener()

bookReader.decrementPage()

bookReader.onRead(() => {
	console.info("@@@ Book read!")
})

bookReader.read()
bookReader.incrementPage()
bookReader.read()

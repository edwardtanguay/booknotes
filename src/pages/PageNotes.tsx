import { useState } from "react";
import { BookNote } from "../types";
import _bookNotes from '../data/bookNotes.json';

const initialBookNotes: BookNote[] = _bookNotes as BookNote[];

export const PageNotes = () => {
	const [bookNotes] = useState<BookNote[]>(initialBookNotes);
	
	return (
		<>
			<p>
				<img src="images/books/shipAround.jpg" />
			</p>
			<hr />
			<p>There are {bookNotes.length} book notes.</p>
		</>
	);
};

import { useState } from "react";
import { BookNote } from "../types";
import _bookNotes from "../data/bookNotes.json";
import * as tools from "../tools";

const initialBookNotes: BookNote[] = _bookNotes as BookNote[];

export const PageNotes = () => {
	const [bookNotes] = useState<BookNote[]>(initialBookNotes);

	return (
		<>
			{bookNotes.map((bookNote) => {
				return (
					<div key={bookNote.idCode} className="mb-6">
						<p>
							<img
								className="float-left mr-3 w-[5rem]"
								src={`images/books/${bookNote.idCode}.jpg`}
							/>
							<p>
								<span className="italic">{bookNote.body}</span>
								<div
								className="text-xs"
									dangerouslySetInnerHTML={{
										__html: tools.getSmartPageNumberDisplay(
											bookNote.page
										),
									}}
								></div>
							</p>
						</p>
					</div>
				);
			})}
		</>
	);
};

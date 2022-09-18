import React, { useState, useEffect } from "react";

import Book from "./Book";

const Section = ({ shelf, onShelfChange, allBooks }) => {
	const [booksShelf, setBooksShelf] = useState([]);

	useEffect(() => {
		setBooksShelf(allBooks.filter((book) => book.shelf === shelf.type));
	}, [allBooks, shelf.type]);

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{shelf.title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{booksShelf.map((book, i) => {
						return (
							<li key={i}>
								<Book
									onShelfChange={onShelfChange}
									allBooks={allBooks}
									book={book}
								/>
							</li>
						);
					})}
				</ol>
			</div>
		</div>
	);
};

export default Section;

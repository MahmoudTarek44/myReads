import React, { useState, useEffect } from "react";

import Book from "./Book";

const Section = ({ shelf, books, onShelfChange }) => {
	const [booksShelf, setBooksShelf] = useState([]);

	useEffect(() => {
		setBooksShelf(books.filter((book) => book.shelf === shelf.type));
	}, [books, shelf.type]);

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{shelf.title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{booksShelf.map((book, i) => {
						return (
							<li key={i}>
								<Book onShelfChange={onShelfChange} book={book} />
							</li>
						);
					})}
				</ol>
			</div>
		</div>
	);
};

export default Section;

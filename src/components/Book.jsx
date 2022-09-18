import React from "react";

import DropDown from "./DropDown";

const Book = ({ book, onShelfChange, allBooks }) => {
	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 193,
						backgroundImage: `url(${book.imageLinks?.thumbnail})`,
					}}
				></div>
				<DropDown
					onShelfChange={onShelfChange}
					allBooks={allBooks}
					book={book}
				/>
			</div>
			<div className="book-title">{book.title}</div>
			<div className="book-authors">
				{book.authors ? book.authors.join(' - ') : null}
			</div>
		</div>
	);
};

export default Book;

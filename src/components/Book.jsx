import React from "react";

import DropDown from "./DropDown";

const Book = ({ book, onShelfChange }) => {
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
				<DropDown onShelfChange={onShelfChange} book={book} />
			</div>
			<div className="book-title">{book.title}</div>
			{book.authors?.map((author, i) => {
				return (
					<div key={i} className="book-authors">
						{author}
					</div>
				);
			})}
		</div>
	);
};

export default Book;

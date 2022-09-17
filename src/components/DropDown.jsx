import React from "react";

const DropDown = ({ book, onShelfChange }) => {
	return (
		<div className="book-shelf-changer">
			<select
				defaultValue={book.shelf ? book.shelf : "none"}
				onChange={(event) => {
					onShelfChange(book, event.target.value);
				}}
			>
				<option value="disabled" disabled>
					Move to...
				</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		</div>
	);
};

export default DropDown;

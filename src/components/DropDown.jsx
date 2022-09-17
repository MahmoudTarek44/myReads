import React from "react";

const DropDown = ({ book, onShelfChange, allBooks }) => {
	let currentShelf = "none";
	for (let item of allBooks) {
		if (item.id === book.id) {
			currentShelf = item.shelf;
			break;
		}
	}
	return (
		<div className="book-shelf-changer">
			<select
				defaultValue={currentShelf}
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

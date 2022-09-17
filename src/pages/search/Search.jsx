import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { search, update } from "../../BooksAPI";
import Book from "../../components/Book";

const Search = () => {
	const [searchResult, setSearchResult] = useState([]);
	const onShelfChange = (book, shelfType) => {
		update(book, shelfType);
	};

	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link to={"/"} className="close-search">
					Close
				</Link>
				<div className="search-books-input-wrapper">
					<input
						onChange={({ target }) => {
							if (target.value) {
								search(target.value, 10).then((res) => {
									setSearchResult(res);
								});
							} else {
								setSearchResult([]);
							}
						}}
						type="text"
						placeholder="Search by title, author, or ISBN"
					/>
				</div>
			</div>
			<div className="search-books-results">
				<ol className="books-grid">
					{!searchResult.error
						? searchResult.map((book) => {
								return (
									<li key={book.id}>
										<Book onShelfChange={onShelfChange} book={book} />
									</li>
								);
						  })
						: null}
				</ol>
			</div>
		</div>
	);
};

export default Search;

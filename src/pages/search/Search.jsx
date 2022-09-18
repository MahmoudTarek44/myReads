import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { search, update, getAll } from "../../BooksAPI";
import Book from "../../components/Book";

const Search = () => {
	const [searchResult, setSearchResult] = useState([]);
	const [allBooks, setAllBooks] = useState([]);

	const onShelfChange = (book, shelfType) => {
		update(book, shelfType);
	};

	useEffect(() => {
		getAll().then((books) => {
			setAllBooks(books);
		});
	}, []);

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
								search(target.value, 20).then((res) => {
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
										<Book
											onShelfChange={onShelfChange}
											allBooks={allBooks}
											book={book}
										/>
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

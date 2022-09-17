import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAll, update } from "../../BooksAPI";

import Navbar from "../../components/Navbar";
import Section from "../../components/Section";


const Home = () => {
	const shelves = [
		{ type: "currentlyReading", title: "Currently Reading" },
		{ type: "wantToRead", title: "Want to Read" },
		{ type: "read", title: "Read" },
	];
	const [allBooks, setAllBooks] = useState([]);

	const onShelfChange = (book, shelfType) => {
		update(book, shelfType).then(() => {
			book.shelf = shelfType;
			setAllBooks(
				allBooks.filter((newbook) => newbook.id !== book.id).concat(book)
			);
		});
		getAll().then((books) => {
			setAllBooks(books);
		});
	};

	useEffect(() => {
		getAll().then((books) => {
			setAllBooks(books);
		});
	}, []);

	return (
		<div className="list-books">
			<Navbar />
			<div className="list-books-content">
				{shelves.map((shelf, i) => {
					return (
						<Section
							key={i}
							shelf={shelf}
							books={allBooks}
							onShelfChange={onShelfChange}
						/>
					);
				})}
			</div>
			<div className="open-search">
				<Link to={"/search"}>Add a book</Link>
			</div>
		</div>
	);
};

export default Home;

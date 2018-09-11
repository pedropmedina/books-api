const { google } = require('googleapis');

const books = google.books('v1');

const getBookshelves = async (root, args, ctx, info) => {
	const res = await books.mylibrary.bookshelves.list();
	return res.data.items;
};

const getBookshelf = async (root, args, ctx, info) => {
	const res = await books.mylibrary.bookshelves.get({ shelf: args.shelfId });
	return res.data;
};

const volumes = async (root, args, ctx, info) => {
	const res = await books.mylibrary.bookshelves.volumes.list({
		shelf: root.id,
	});
	return res.data.items;
};

module.exports = {
	Query: {
		getBookshelves,
		getBookshelf,
	},
	Bookshelf: {
		volumes,
	},
};

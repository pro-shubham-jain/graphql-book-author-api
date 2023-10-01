const authors = [
    { id: 1, name: 'J. K. Rowling' },
    { id: 2, name: 'J. R. R. Tolkien' },
    { id: 3, name: 'Brent Weeks' },
    { id: 4, name: 'George Orwell' },
    { id: 5, name: 'Agatha Christie' },
    { id: 6, name: 'Stephen King' },
    { id: 7, name: 'Jane Austen' },
    { id: 8, name: 'Mark Twain' },
    { id: 9, name: 'Leo Tolstoy' },
    { id: 10, name: 'Charles Dickens' }
];

const books = [
    { id: 1, name: 'The Secret Garden', authorId: 1 },
    { id: 2, name: 'The Goblet of Fire', authorId: 1 },
    { id: 3, name: 'The Sorcerer\'s Stone', authorId: 1 },
    { id: 4, name: 'The Fellowship of the Ring', authorId: 2 },
    { id: 5, name: 'The Two Towers', authorId: 2 },
    { id: 6, name: 'The Return of the King', authorId: 2 },
    { id: 7, name: 'The Way of Shadows', authorId: 3 },
    { id: 8, name: 'Beyond the Shadows', authorId: 3 },
    { id: 9, name: 'Nineteen Eighty-Four', authorId: 4 },
    { id: 10, name: 'Animal Farm', authorId: 4 },
    { id: 11, name: 'Murder on the Orient Express', authorId: 5 },
    { id: 12, name: 'The Shining', authorId: 6 },
    { id: 13, name: 'Pride and Prejudice', authorId: 7 },
    { id: 14, name: 'Sense and Sensibility', authorId: 7 },
    { id: 15, name: 'The Adventures of Huckleberry Finn', authorId: 8 },
    { id: 16, name: 'War and Peace', authorId: 9 },
    { id: 17, name: 'Anna Karenina', authorId: 9 },
    { id: 18, name: 'Great Expectations', authorId: 10 },
    { id: 19, name: 'Oliver Twist', authorId: 10 },
    { id: 20, name: 'The Catcher in the Rye', authorId: 11 }
];

module.exports = {authors, books};
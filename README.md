<h1>GraphQL Book & Author API</h1>

<p>Welcome to the GraphQL Book & Author API repository! This API allows you to manage data related to books and authors through GraphQL queries and mutations. Whether you're building a book catalog or exploring GraphQL, this API can serve as a powerful tool for your project.</p>

<h2>Getting Started</h2>

<p>Follow these steps to set up and run the API:</p>

<ol>
    <li>Clone the repository:</li>
    <pre><code>git clone https://github.com/pro-shubham-jain/graphql-book-author-api.git</code></pre>
    <li>Change to the project directory:</li>
    <pre><code>cd graphql-book-author-api</code></pre>
    <li>Install dependencies:</li>
    <pre><code>npm install</code></pre>
    <li>Start the server:</li>
    <pre><code>npm start</code></pre>
</ol>

<h2>GraphQL Queries and Mutations</h2>

<p>The API supports a variety of GraphQL queries and mutations to interact with books and authors. Here are some examples:</p>

<h3>Queries</h3>

<p>Get all books:</p>
<pre><code>

{
books {
id
name
author {
id
name
}
}
}
</code></pre>

<p>Get all authors:</p>
<pre><code>

{
authors {
id
name
books {
id
name
}
}
}
</code></pre>

<p>Get single book:</p>
<pre>
<code>
query {
    book(id: 1) {
        id
        name
        author {
            id
            name
        }
    }
}
</code>
</pre>

<h3>Mutations</h3>

<p>Create a new book:</p>
<pre><code>

mutation {
createBook(input: {
name: "New Book name",
authorId: 1
}) {
id
name
}
}
</code></pre>

<p>Create a new author:</p>
<pre><code>

mutation {
createAuthor(input: {
name: "New Author Name"
}) {
id
name
}
}
</code></pre>

<p>Update a book:</p>
<pre><code>

mutation {
updateBook(id: "1", input: {
name: "Updated Book name"
}) {
id
name
}
}
</code></pre>

<p>Update an author:</p>
<pre><code>

mutation {
updateAuthor(id: "1", input: {
name: "Updated Author Name"
}) {
id
name
}
}
</code></pre>

<h2>Explore GraphQL and Manage Your Book Data!</h2>

<p>With this GraphQL Book & Author API, you have a powerful tool at your disposal to explore GraphQL and manage your book data. Whether you're a developer, student, or just a book enthusiast, we hope you find this API useful for your projects.</p>

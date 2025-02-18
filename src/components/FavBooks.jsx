export default function FavBooks({ books }) {
  return (
    <ul>
      {books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      })}
    </ul>
  );
}

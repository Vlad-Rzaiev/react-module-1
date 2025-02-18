import Product from './Product';
import MailBox from './MailBox';
import FavBooks from './FavBooks';
import { favBooks } from '../books';
import Card from './Card';

export default function App() {
  return (
    <div>
      <MailBox username="Mango" messages={[]} />

      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />

      <FavBooks books={favBooks} />

      <Card>
        <h2>Card title</h2>
        <p>Text between opening and closing tag</p>
      </Card>
    </div>
  );
}

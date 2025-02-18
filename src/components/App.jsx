import Product from './Product';
import MailBox from './MailBox';
import FavBooks from './FavBooks';
import { favBooks } from '../books';
import Card from './Card';
import Alert from './Alert';
import UserMenu from './UserMenu';
import Button from './Button';
import clsx from 'clsx';
import css from '../index.module.css';

export default function App() {
  return (
    <div className={clsx(css.container)}>
      <UserMenu>Hello</UserMenu>

      <MailBox username="Mango" messages={[1, 2, 3, 4, 5]} />

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
        <h2 className={css['section-title']}>Card title</h2>
        <p>Text between opening and closing tag</p>
      </Card>

      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>

      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
  );
}

import clsx from 'clsx';
import css from './UserMenu.module.css';
import { HiUserGroup } from 'react-icons/hi';

export default function UserMenu({ children }) {
  return (
    <>
      <p className={clsx(css.myIcon)}>
        <HiUserGroup className={clsx(css.iconColor)} size="30" /> {children}
      </p>
    </>
  );
}

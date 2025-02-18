import clsx from 'clsx';
import css from './Alert.module.css';

export default function Alert({ variant, children, outlined, elevated }) {
  return (
    <p
      className={clsx(
        css[variant],
        outlined && css.isOutlined,
        elevated && css.isElevated
      )}
    >
      {children}
    </p>
  );
}

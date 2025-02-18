import clsx from 'clsx';
import css from './Button.module.css';

export default function Button({ variant, children, disabled }) {
  return (
    <>
      <button
        className={clsx(css[variant], disabled && css.disabled)}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
}

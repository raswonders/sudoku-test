export function Button({ variant, children, onClick }) {
  const filledStyles = `bg-gray-300`;
  const outlinedStyles = `border border-black`;
  const buttonStyles = `py-2 px-8 rounded-full ${
    variant === "filled" && filledStyles
  } ${variant === "outlined" && outlinedStyles}`;

  return <button className={buttonStyles}>{children}</button>;
}

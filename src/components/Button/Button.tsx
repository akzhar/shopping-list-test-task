import React from 'react';

type TButtonProps = {
  text: string,
  clickHandler?: () => void,
  isAnimate?: boolean
}

const Button: React.FC<TButtonProps> = ({ text, clickHandler = () => undefined, isAnimate = false}: TButtonProps) => (
  <button
    className={isAnimate ? 'button button--animate' : 'button'}
    onClick={clickHandler}
  >
      {text}
  </button>
);

export default Button;

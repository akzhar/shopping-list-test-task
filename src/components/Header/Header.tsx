import React from 'react';

type THeaderProps = {
  children: React.ReactNode
};

const Header: React.FC<THeaderProps> = ({ children }: THeaderProps) => (
  <header className="header">
    {children}
  </header>
);

export default Header;



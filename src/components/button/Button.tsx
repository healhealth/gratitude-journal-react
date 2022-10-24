import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler;
}

const Button = ({ children, onClick }: ButtonProps) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;

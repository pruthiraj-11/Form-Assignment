import React from 'react';
import { Button as ShadcnButton } from "@/components/ui/button"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ShadcnButton {...props}>
      {children}
    </ShadcnButton>
  );
};


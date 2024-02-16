'use client';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll';

interface CustomButtonProps {
  link?: string;
  name: string;
  variant?: "link" | "outline" | "default" | "destructive" | "secondary" | "ghost" | null | undefined;
  width?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ link, name, variant, width }) => {
  const buttonWidth = width ? { width } : {};

  if (link) {
    if (link.includes('/')) {
      // Use Next.js Link for link
      return (
        <Link href={link}>
          <Button {...(variant ? { variant } : {})} style={buttonWidth}>{name}</Button>
        </Link>
      );
    }
    // If scrollTarget is provided, use react-scroll Link
    return (
      <ScrollLink to={link} smooth={true} duration={500}>
        <Button {...(variant ? { variant } : {})} style={buttonWidth}>{name}</Button>
      </ScrollLink>
    );
  }

  return (
    <Button {...(variant ? { variant } : {})} style={buttonWidth}>{name}</Button>
  );
}

export default CustomButton;
'use client';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll';

interface CustomButtonProps {
  link: string;
  name: string;
  variant?: "link" | "outline" | "default" | "destructive" | "secondary" | "ghost" | null | undefined;
  width?: string;
  scrollTarget?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ link, name, variant, width, scrollTarget }) => {
  const buttonWidth = width ? { width } : {};

  if (scrollTarget) {
    // If scrollTarget is provided, use react-scroll Link
    return (
      <ScrollLink to={scrollTarget} smooth={true} duration={500}>
        <Button {...(variant ? { variant } : {})} style={buttonWidth}>{name}</Button>
      </ScrollLink>
    );
  }

  // Otherwise, use Next.js Link
  return (
    <Link href={link}>
      <Button {...(variant ? { variant } : {})} style={buttonWidth}>{name}</Button>
    </Link>
  );
}

export default CustomButton;
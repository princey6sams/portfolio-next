'use client';
import Link from 'next/link';
import React from 'react'
import { Button } from '@/components/ui/button'

interface CustomButtonProps {
    link: string;
    name: string;
    variant?: "link" | "outline" | "default" | "destructive" | "secondary" | "ghost" | null | undefined;
    width?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ link, name, variant, width }) => {
    const buttonWidth = width ? {width} : {};
    return (
        <Link href={link}>
            <Button {...(variant ? { variant } : {})} style={buttonWidth}>{name}</Button>
        </Link>
    )
}

export default CustomButton
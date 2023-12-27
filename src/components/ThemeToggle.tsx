"use client"
import { useEffect, useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import { Toggle } from "@/components/ui/toggle"


const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <Toggle aria-label="Toggle italic" onClick={() => setDarkMode(!darkMode)}>
            <LightModeIcon />
        </Toggle>
    )
}

export default ThemeToggle
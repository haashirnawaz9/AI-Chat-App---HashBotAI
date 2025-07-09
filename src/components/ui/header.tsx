'use client';
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "./button";
import Link from "next/link";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const { isSignedIn } = useUser();

  return (
    <header className="bg-gradient-to-r from-blue-300 to-indigo-400 h-16 flex justify-between items-center px-6 shadow-md sticky top-0">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 ml-2">
        <Link href="/">HashBot AI</Link>
      </h2>
      <div className="flex items-center gap-4 mr-3">
        {isSignedIn && (
          <Button onClick={toggleDarkMode} variant="outline" size="sm">
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </Button>
        )}
        <UserButton />
      </div>
    </header>
  );
};

export default Header;

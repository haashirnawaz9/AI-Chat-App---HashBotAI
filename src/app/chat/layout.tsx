'use client'
import { ClerkLoaded } from "@clerk/nextjs";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { useState, useEffect } from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Apply/remove dark mode class on html element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);  

  return (
    <ClerkLoaded>
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ClerkLoaded>
  );
}

export default DashboardLayout;

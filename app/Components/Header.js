import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import UserInfo from "./UserInfo";
import Connection from "./Connection";
import { Context } from "./UserContext";
import Button from "./DarkMode";
import { useTheme } from "next-themes";
import { ThemeProvider } from "next-themes";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();

  const [log, setlog] = useState(false);
  const { user } = useContext(Context);

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Button onClick={() => setTheme("light")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </Button>
      );
    } else {
      return (
        <Button onClick={() => setTheme("dark")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </Button>
      );
    }
  };

  return (
    <header class=" bg-slate-300 dark:bg-slate-900 w-screen">
      <title>Create Next App</title>
      <Link href={`/`}>
        <span class="text-5xl box-border w-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 28 28"
            strokeWidth={1.5}
            stroke="currentColor"
            class="w-20 h-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </span>
      </Link>
      <div class="flex">
        <div class="flex mx-auto px-4 columns-6 gap-20">
          <div class="bg-slate-200 rounded-md h-8 text-2xl font-bold font-mono text-black">
            <Link href="/articles">Articles</Link>
          </div>
          <div class="bg-red-400 rounded-md h-8 text-2xl font-bold font-mono text-black">
            <Link href="/about">About us</Link>
          </div>
          <div class="bg-slate-500 rounded-md h-8 text-2xl font-bold font-mono text-black">
            <Link href="/contact">Contact us</Link>
          </div>
          <div class="bg-slate-420 rounded-md">
            {user ? <UserInfo /> : <Connection />}
          </div>
        </div>
        <div class=""></div>
        {renderThemeChanger()}
      </div>
    </header>
  );
}

import "../styles/globals.css";
import { ContextProvider } from "../Components/UserContext";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  return (
    <ThemeProvider attribute="class">
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </SessionContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;

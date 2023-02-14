import "@/styles/globals.css";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

import DataContextWrapper from "@/context/inputDataContext";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div className={inter.className}>
      <DataContextWrapper>
        <Component {...pageProps} />
      </DataContextWrapper>
    </div>
  );
}

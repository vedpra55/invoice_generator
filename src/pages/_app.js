import "@/styles/globals.css";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

import DataContextWrapper from "@/context/inputDataContext";

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <DataContextWrapper>
        <Component {...pageProps} />
      </DataContextWrapper>
    </div>
  );
}

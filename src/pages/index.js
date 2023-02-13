import Head from "next/head";
import { useRef } from "react";

import Navbar from "@/components/navbar";
import InvoiceContainer from "@/components/invoiceContainer";
import PdfView from "@/components/pdfView";

export default function Home() {
  const ref = useRef();

  return (
    <>
      <Head>
        <title>Invoice Generater</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <InvoiceContainer ref={ref} />
        <PdfView ref={ref} />
      </main>
    </>
  );
}

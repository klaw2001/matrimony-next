import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layouts/Layout";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import PreLoader from "@/components/PreLoader";
import { Suspense } from "react";
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Quick Match Matrimony",
  description: "Quick Match Matrimony",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <Suspense fallback={<PreLoader />}>
        <body>{children}</body>
      </Suspense>
    </html>
  );
}

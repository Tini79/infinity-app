import type { Metadata } from "next";
import { montserrat } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import Footer from "./ui/components/footer"
import Navbar from "./ui/components/navbar/navbar"
import Navigation from "./ui/components/navigation/navigation";

export const metadata: Metadata = {
  title: "Infinity Pritty Jewellery",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* TODO: ini baru kerangkanya doang, efek slider sama underline dll belum keisi ini,
      ohh pada testimonials belum isi stars juga, double check lagi yak */}
      { }
      <body className={`${montserrat.className} antialiased`} >
        <Navigation children={children}></Navigation>
        {/* <Navbar></Navbar>
        {children}
        <Footer></Footer> */}
      </body>
    </html>
  );
}


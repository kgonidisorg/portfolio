import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiron Gonidis",
  description: "Portfolio of Kiron Gonidis, a software architect and cloud engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"antialiased"}
      >
        {children}
      </body>
    </html>
  );
}

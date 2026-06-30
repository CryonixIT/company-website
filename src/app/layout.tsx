import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cryonix IT | Precision Software Engineering",
  description: "Architecting high-performance digital ecosystems, enterprise ERPs, and machine learning systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

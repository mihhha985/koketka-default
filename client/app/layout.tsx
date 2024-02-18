import type { Metadata } from "next";
import { Cormorant_Garamond, Comfortaa, Permanent_Marker } from "next/font/google";
import "./globals.css";

const logo = Permanent_Marker({ 
	subsets: ["latin"],
	weight: ['400'], 
	variable: '--font-logo',
	display: 'swap',
});

const link = Comfortaa({ 
	subsets: ["cyrillic-ext", "cyrillic"],
	weight: ['300', '400', '500', '700'], 
	variable: '--font-comfortaa',
	display: 'swap',
});

const main = Cormorant_Garamond({ 
	subsets: ["cyrillic-ext", "cyrillic"],
	weight: ['400', '500', '700'], 
	variable: '--font-garamond',
	display: 'swap',
});

export const metadata: Metadata = {
  title: `${process.env.name} - ${process.env.title}`,
  description: process.env.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
			<head>
				<link rel="icon" href="/favicon.png"  type="image/png"/>			
			</head>
      <body className={`${main.variable} ${link.variable}`}>
				{children}
			</body>
    </html>
  );
}

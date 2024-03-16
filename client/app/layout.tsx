import type { Metadata } from "next";
import Providers from "@/component/Provider";
import Script from "next/script";

import { 
	Cormorant_Garamond, 
	Comfortaa, 
	Permanent_Marker 
} from "next/font/google";

import "@/styles/globals.scss";

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
  title: `${process.env.name} - Эскорт услуги элитных эскортниц в вашем городе`,
  description: `Сервис эскорт услуг ${process.env.name} предоставляет платный доступ к базе элитных эскортниц России`,

	icons:{
		icon: "/favicon.png",
	}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	
  return (
    <html lang="en">
			<head>
				<meta name="yandex-verification" content="d6e4ddc9be1edee6" />
			</head>

      <body className={`${main.variable} ${link.variable} ${logo.variable}`}>
				<Script id="metrika-counter" strategy="afterInteractive">
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
					m[i].l=1*new Date();
					for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
					k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
					(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

					ym(96532441, "init", {
						clickmap:true,
						trackLinks:true,
						accurateTrackBounce:true,
						webvisor:true
					});
				`}    
        </Script>
				<Providers>
					{children}
				</Providers>
			</body>
    </html>
  );
}

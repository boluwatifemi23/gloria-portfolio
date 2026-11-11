import "./globals.css";
import { profile } from "@/data/content";

export const metadata = {
  title: `${profile.shortName} | ${profile.role}`,
  description: profile.intro,
  openGraph: { title: `${profile.shortName} | ${profile.role}`, description: profile.headline, type: "website" },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#0E1B2E" };

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

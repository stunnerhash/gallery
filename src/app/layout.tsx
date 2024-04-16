import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Gallery",
  description: "gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav(){
  return ( 
    <nav className="flex items-center justify-between w-full p-4 text-2xl font-semibold">
      <div>Gallery</div>
      <div>Sign In</div>
    </nav>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TopNav/>
        {children}
      </body>
    </html>
  );
}

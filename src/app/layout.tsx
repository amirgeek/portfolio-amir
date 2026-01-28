
import { Inter } from "next/font/google";
import "../styles/globals.css"; // Ensure Tailwind CSS is imported

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amir B. - Tech & Marketing Manager",
  description: "Amir B.'s professional portfolio showcasing expertise in Tech & Marketing Management, SaaS development, Crypto Arbitrage, and Digital Advertising.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}

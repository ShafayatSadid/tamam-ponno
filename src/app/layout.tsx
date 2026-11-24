import type { Metadata } from "next";
import { Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  variable: "--font-bangla",
});

export const metadata: Metadata = {
  title: "Tamam Ponno | Premium Fashion & Lifestyle",
  description: "Premium Jubba, Panjabi, Borkha, and T-shirts in Bangladesh. Cash on Delivery available.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, hindSiliguri.variable, "h-full antialiased")}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
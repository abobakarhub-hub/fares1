import type { Metadata } from "next";
import { Amiri, Cairo } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "علماء العرب | علماء العصر العباسي في الفلك والرياضيات والفيزياء",
  description:
    "رحلة أسطورية في أعمال أعظم علماء العصر العباسي في الفلك والرياضيات والفيزياء، بتجربة ثلاثية الأبعاد تعيد إحياء العصر الذهبي للعلم.",
  keywords: [
    "علماء العرب",
    "الفلك",
    "الرياضيات",
    "الفيزياء",
    "العصر الذهبي",
    "ابن الهيثم",
    "الخوارزمي",
    "البتاني",
  ],
  authors: [{ name: "علماء العرب" }],
  openGraph: {
    title: "علماء العرب | العصر الذهبي للعلم",
    description: "٩ أعلام أسطوريون في الفلك والرياضيات والفيزياء بتجربة 3D",
    siteName: "علماء العرب",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${amiri.variable} ${cairo.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

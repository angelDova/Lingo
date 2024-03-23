import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ExitModal } from "@/components/modals/exit-modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lingo",
  description: "Language app created by angelDova",
  icons: {
    icon: [
      {
        type: "image/svg+xml",
        url: "/mascot.svg",
        href: "/mascot.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <Toaster richColors position="top-center" />
          <ExitModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

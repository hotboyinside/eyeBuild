import type { Metadata } from "next";
import "@/assets/styles/index.scss";
import { ToastContainer } from "@/components/common";

export const metadata: Metadata = {
  title: "EyeBuild",
  description: "Video surveillance, AI video analysis, API alerts and CRM integration.",
  icons: {
    icon: [
      { url: "/images/favicons/favicon.svg", type: "image/svg+xml" },
      { url: "/images/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/images/favicons/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}

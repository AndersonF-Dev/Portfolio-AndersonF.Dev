import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AndersonF.Dev | Portfólio",
  description: "Desenvolvedor Frontend",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/* Removemos as classes de fontes daqui */}
      <body className={sora.variable}>
        <Providers>
          <div className="page">{children}</div>
        </Providers>
      </body>
    </html>
  );
}

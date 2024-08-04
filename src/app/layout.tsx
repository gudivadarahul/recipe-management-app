import { Providers as ReduxProviders } from "@/redux/provider";
import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata = {
  title: "The Forgotten Cookbook",
  description:
    "Preserve your culinary legacy with our digital recipe management app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} antialiased bg-background text-text`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReduxProviders>
            <div className="min-h-screen flex flex-col">
              <main className="flex-grow">{children}</main>
            </div>
          </ReduxProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}

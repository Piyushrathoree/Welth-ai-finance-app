import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Welth",
    description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <head>
                    <link rel="icon" href="/logo-sm.png" sizes="any" />
                </head>
                <body className={`${inter.className}`}>
                    <ThemeProvider>
                        <Header />
                        <main className="min-h-screen">{children}</main>
                        <Toaster richColors />

                        <footer className="bg-blue-50 dark:bg-gray-900 py-12">
                            <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
                                <p>Made with 💗 by Piyush Rathore</p>
                            </div>
                        </footer>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}

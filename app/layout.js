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

                        <footer className="bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-black py-12 border-t border-neutral-200/20 dark:border-neutral-700/20">
                            <div className="container mx-auto px-4 text-center">
                                <div className="flex flex-col items-center space-y-4">
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-white bg-clip-text text-transparent">
                                        Welth
                                    </h3>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        Made with 💗 by Piyush Rathore
                                    </p>
                                    <div className="flex items-center space-x-6 text-sm text-neutral-500 dark:text-neutral-500">
                                        <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-200">
                                            Privacy Policy
                                        </a>
                                        <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-200">
                                            Terms of Service
                                        </a>
                                        <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors duration-200">
                                            Contact
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}

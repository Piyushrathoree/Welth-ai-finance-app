import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import { ThemeToggle } from "./theme-toggle";

const Header = async () => {
    await checkUser();

    return (
        <header className="fixed top-0 bg-transparent  w-full glass dark:glass-dark backdrop-blur-md z-50 border-b border-neutral-200/20 dark:border-neutral-700/20">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-white bg-clip-text text-transparent">
                        Welth
                    </h1>
                </Link>

                {/* Navigation Links - Different for signed in/out users */}
                <div className="hidden md:flex items-center space-x-8">
                    <SignedOut>
                        <a
                            href="#features"
                            className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                        >
                            Features
                        </a>
                        <a
                            href="#testimonials"
                            className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                        >
                            Testimonials
                        </a>
                    </SignedOut>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                    <ThemeToggle />
                    <SignedIn>
                        <Link
                            href="/dashboard"
                            className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 flex items-center gap-2"
                        >
                            <Button variant="outline" className="border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                                <LayoutDashboard size={18} />
                                <span className="hidden md:inline">
                                    Dashboard
                                </span>
                            </Button>
                        </Link>
                        <a href="/transaction/create">
                            <Button className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100">
                                <PenBox size={18} />
                                <span className="hidden md:inline">
                                    Add Transaction
                                </span>
                            </Button>
                        </a>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton forceRedirectUrl="/dashboard">
                            <Button variant="outline" className="border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                                Login
                            </Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10",
                                },
                            }}
                        />
                    </SignedIn>
                </div>
            </nav>
        </header>
    );
};

export default Header;

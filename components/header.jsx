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
        <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/">
                    <h1 className="text-3xl italic text-blue-600 font-bold">
                        Welth
                    </h1>
                </Link>

                {/* Navigation Links - Different for signed in/out users */}
                <div className="hidden md:flex items-center space-x-8">
                    <SignedOut>
                        <a
                            href="#features"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            Features
                        </a>
                        <a
                            href="#testimonials"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
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
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2"
                        >
                            <Button variant="outline">
                                <LayoutDashboard size={18} />
                                <span className="hidden md:inline">
                                    Dashboard
                                </span>
                            </Button>
                        </Link>
                        <a href="/transaction/create">
                            <Button className="flex items-center gap-2">
                                <PenBox size={18} />
                                <span className="hidden md:inline">
                                    Add Transaction
                                </span>
                            </Button>
                        </a>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton forceRedirectUrl="/dashboard">
                            <Button variant="outline">Login</Button>
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

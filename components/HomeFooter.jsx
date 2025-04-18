import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HomeFooter() {
    return (
        <footer className="bg-gray-50 border-t mt-10">
            <div className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-600">
                {/* Logo & Name */}
                <Link href="/" className=" hidden lg:flex" prefetch={false}>
                    {/* <MountainIcon className="h-6 w-6" /> */}
                    <Image src="/logo.png" width={200} height={200} alt="logo" />
                </Link>

                {/* Links */}
                <div className="flex gap-6 text-gray-500">
                    <a href="/privacy" className="hover:text-gray-900 transition">
                        Privacy Policy
                    </a>
                    <a href="/terms" className="hover:text-gray-900 transition">
                        Terms
                    </a>
                    <a href="/contact" className="hover:text-gray-900 transition">
                        Contact
                    </a>
                    <a
                        href="https://github.com/Garnfil/quickcopy-ai"
                        target="_blank"
                        className="hover:text-gray-900 transition"
                    >
                        GitHub
                    </a>
                </div>

                {/* Branding note */}
                <div className="text-center text-gray-400 text-xs">
                    © {new Date().getFullYear()} QuickCopy AI — Built with ❤️ by James Garnfil
                </div>
            </div>
        </footer>
    );
}

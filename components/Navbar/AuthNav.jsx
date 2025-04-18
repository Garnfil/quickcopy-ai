"use client";

import { nunitoSans } from "@/fonts";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

export default function AuthNav() {
    const pathName = usePathname();
    return (
        <header className="w-full px-4 md:px-6">
            <div className="flex justify-between items-center h-24">
                <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
                    {/* <MountainIcon className="h-6 w-6" /> */}
                    <h2 className={`font-bold text-2xl ${nunitoSans.className}`}>QuickCopy</h2>
                    <span className="sr-only">QuickCopy Inc</span>
                </Link>
                <div className="flex gap-5 items-center">
                    <h6 className="text-sm font-medium">
                        {pathName === "/sign-in" ? "Don't have an account?" : "Have an account?"}
                    </h6>
                    <Link href={pathName === "/sign-in" ? "/sign-up" : "/sign-in"}>
                        <Button style={{ boxShadow: "0 10px 25px #6347ea80" }}>
                            {pathName === "/sign-in" ? "Sign Up" : "Sign In"}
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

import { nunitoSans } from "@/fonts";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function AuthNav() {
    return (
        <header className="w-full px-4 md:px-6">
            <div className="flex justify-between items-center h-24">
                <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
                    {/* <MountainIcon className="h-6 w-6" /> */}
                    <h2 className={`font-bold text-2xl ${nunitoSans.className}`}>QuickCopy</h2>
                    <span className="sr-only">QuickCopy Inc</span>
                </Link>
                <div className="flex gap-5 items-center">
                    <h6 className="text-sm font-medium">Don't have an account?</h6>
                    <Button style={{ boxShadow: "0 10px 25px #6347ea80" }}>Sign Up</Button>
                </div>
            </div>
        </header>
    );
}

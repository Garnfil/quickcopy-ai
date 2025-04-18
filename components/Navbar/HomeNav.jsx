"use client";

import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { nunitoSans } from "@/fonts";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Component() {
    const pathname = usePathname();
    return (
        <header className="bg-primary-50 w-full px-4 md:px-6">
            <div className="max-w-screen-xl mx-auto flex shrink-0 items-center h-20">
                <Sheet className="bg-white">
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-white p-5">
                        <SheetTitle>
                            <Link href="#" prefetch={false}>
                                <Image src={"/logo.png"} width={150} height={150} alt="logo" />
                            </Link>
                        </SheetTitle>

                        <div className="grid gap-3 py-6">
                            <Link
                                href="/"
                                className="flex  w-full items-center py-2 text-lg font-semibold"
                                prefetch={false}
                            >
                                Home
                            </Link>
                            <Link
                                href="/contact"
                                className="flex w-full items-center py-2 text-lg font-semibold"
                                prefetch={false}
                            >
                                Contact
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
                <Link href="/" className=" hidden lg:flex" prefetch={false}>
                    {/* <MountainIcon className="h-6 w-6" /> */}
                    <Image src="/logo.png" width={200} height={200} alt="logo" />
                </Link>
                <div className="flex w-full justify-center">
                    <NavigationMenu className="hidden lg:flex">
                        <NavigationMenuList>
                            <NavigationMenuLink asChild>
                                <Link
                                    data-active={pathname === "/"}
                                    href="/"
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium hover:bg-transparent hover:text-primary hover:font-bold focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active=true]:text-primary data-[active=true]:font-bold data-[active=true]:bg-transparent data-[active=true]:focus:bg-transparent"
                                    prefetch={false}
                                >
                                    Home
                                </Link>
                            </NavigationMenuLink>

                            <NavigationMenuLink asChild>
                                <Link
                                    data-active={pathname === "/contact"}
                                    href="/contact"
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium hover:bg-transparent hover:text-primary hover:font-bold focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active=true]:text-primary data-[active=true]:font-bold data-[active=true]:bg-transparent data-[active=true]:focus:bg-transparent"
                                    prefetch={false}
                                >
                                    Contact
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="ml-auto">
                    <Link href={"/sign-in"}>
                        <Button>Sign In</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}

function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}

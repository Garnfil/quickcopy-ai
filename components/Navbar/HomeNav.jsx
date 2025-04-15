/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wTME9btlBWv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { nunitoSans } from "@/fonts";

export default function Component() {
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
                    <SheetContent side="left" className="bg-white">
                        <Link href="#" prefetch={false}>
                            <MountainIcon className="h-6 w-6" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        <div className="grid gap-3 py-6">
                            <Link
                                href="#"
                                className="flex  w-full items-center py-2 text-lg font-semibold"
                                prefetch={false}
                            >
                                Home
                            </Link>
                            <Link
                                href="#"
                                className="flex w-full items-center py-2 text-lg font-semibold"
                                prefetch={false}
                            >
                                About
                            </Link>
                            <Link
                                href="#"
                                className="flex w-full items-center py-2 text-lg font-semibold"
                                prefetch={false}
                            >
                                Services
                            </Link>
                            <Link
                                href="#"
                                className="flex w-full items-center py-2 text-lg font-semibold"
                                prefetch={false}
                            >
                                Portfolio
                            </Link>
                            <Link
                                href="#"
                                className="flex w-full items-center py-2 text-lg font-semibold"
                                prefetch={false}
                            >
                                Contact
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
                <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
                    {/* <MountainIcon className="h-6 w-6" /> */}
                    <h2 className={`font-bold text-2xl ${nunitoSans.className}`}>QuickCopy</h2>
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <div className="flex w-full justify-center">
                    <NavigationMenu className="hidden lg:flex">
                        <NavigationMenuList>
                            <NavigationMenuLink asChild>
                                <Link
                                    data-active={true}
                                    href="#"
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-transparent hover:text-primary hover:font-bold focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-primary data-[active]:font-bold data-[active]:bg-transparent"
                                    prefetch={false}
                                >
                                    Home
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="#"
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-transparent hover:text-primary hover:font-bold focus:bg-primary-200 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary-200/50 data-[state=open]:bg-primary-200/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                    prefetch={false}
                                >
                                    About
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="#"
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-transparent hover:text-primary hover:font-bold focus:bg-primary-200 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary-200/50 data-[state=open]:bg-primary-200/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                    prefetch={false}
                                >
                                    Services
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="#"
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-transparent hover:text-primary hover:font-bold focus:bg-primary-200 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary-200/50 data-[state=open]:bg-primary-200/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                    prefetch={false}
                                >
                                    Portfolio
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="#"
                                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-transparent hover:text-primary hover:font-bold focus:bg-primary-200 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary-200/50 data-[state=open]:bg-primary-200/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
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
